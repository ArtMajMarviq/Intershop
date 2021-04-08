import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoryWarehousesComponent } from './category-warehouses.component';

describe('Category Warehouses Component', () => {
  let component: CategoryWarehousesComponent;
  let fixture: ComponentFixture<CategoryWarehousesComponent>;
  let element: HTMLElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CategoryWarehousesComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CategoryWarehousesComponent);
    component = fixture.componentInstance;
    element = fixture.nativeElement;
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
    expect(element).toBeTruthy();
    expect(() => fixture.detectChanges()).not.toThrow();
  });
});
