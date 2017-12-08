import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CustomValidators } from 'ng2-validation';
import { GlobalConfiguration } from '../../../../core/configurations/global.configuration';
import { AccountLoginService } from '../../../../core/services/account-login/account-login.service';


@Component({
  selector: 'is-simple-registration',
  templateUrl: './simple-registration.component.html'
})

export class SimpleRegistrationComponent implements OnInit {
  simpleRegistrationForm: FormGroup;
  isUsername: boolean;
  errorUser: string;
  isDirty: boolean;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private globalConfiguration: GlobalConfiguration,
    private accountLoginService: AccountLoginService
  ) { }

  /**
     * Creates Login Form
  */
  ngOnInit() {
    const applicationSettings = this.globalConfiguration.getApplicationSettings();

    this.isUsername = applicationSettings.userRegistrationLoginType === 'username';
    const password = new FormControl('', [Validators.required, Validators.minLength(7), Validators.pattern(/(?!^[0-9]*$)(?!^[a-zA-Z]*$)^([a-zA-Z0-9!@#$%^&*()_+}{?><:"\S]{7,})$/)]);
    const confirmPassword = new FormControl('', [Validators.required, CustomValidators.equalTo(password)]);
    this.simpleRegistrationForm = this.formBuilder.group({
      userName: ['', Validators.compose([this.isUsername ? Validators.required : Validators.nullValidator])],
      email: ['', [Validators.required, CustomValidators.email]],
      password: password,
      confirmPassword: confirmPassword
    });
  }

  /**
     * Creates simple Account
  */
  createAccount() {
    if (this.simpleRegistrationForm.invalid) {
      this.isDirty = true;
      return;
    }
    const userData = this.simpleRegistrationForm.value;
    this.accountLoginService.createUser(userData).subscribe(response => {
      // TODO: Check should be in accordance with rest call response
      if (response) {
        this.router.navigate(['/home']);
      }
    });
  }
  errorMessage() {
    return this.isUsername ? ('account.username.already_exist.error') : ('account.email.already_exist.error');
  }
}
