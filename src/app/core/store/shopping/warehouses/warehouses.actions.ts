import { createAction } from '@ngrx/store';

import { httpError, payload } from 'ish-core/utils/ngrx-creators';

import { WarehousesState } from './warehouses.reducer';

export const loadWarehouses = createAction('[Warehouses Internal] Load warehouses');

export const loadWarehousesFail = createAction('[Warehouses API] Load warehouses fail', httpError());

export const loadWarehousesSuccess = createAction(
  '[Warehouses API] Load warehouses success',
  payload<{ warehouses: WarehousesState }>()
);
