import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { ShoppingFacade } from 'ish-core/facades/shopping.facade';
import { Warehouse } from 'ish-core/store/shopping/warehouses/warehouses.reducer';

@Component({
  selector: 'ish-category-warehouses',
  templateUrl: './category-warehouses.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CategoryWarehousesComponent implements OnInit {
  warehouse$: Observable<Warehouse[]>;
  warehouseDescription$: Observable<string>;

  constructor(private shoppingFacade: ShoppingFacade) {}

  ngOnInit() {
    this.warehouse$ = this.shoppingFacade.warehouses$();
    this.warehouseDescription$ = this.shoppingFacade.warehouseDescription$();
  }
}
