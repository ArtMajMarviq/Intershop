import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { SharedModule } from 'ish-shared/shared.module';

import { CategoryWarehousesComponent } from './category-warehouses.component';

const warehousePageRoutes: Routes = [{ path: '**', component: CategoryWarehousesComponent }];

@NgModule({
  imports: [RouterModule.forChild(warehousePageRoutes), SharedModule],
  declarations: [CategoryWarehousesComponent],
})
export class WarehousePageModule {}
