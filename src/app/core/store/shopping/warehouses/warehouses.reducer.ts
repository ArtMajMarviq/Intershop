import { createReducer, on } from '@ngrx/store';

import { loadWarehousesSuccess } from './warehouses.actions';

export interface Warehouse {
  country: string;
  city: string;
  number: number;
  id: number;
}

export interface WarehousesState {
  title: string;
  description: string;
  data: Warehouse[];
}

export const initialState: WarehousesState = {
  title: undefined,
  description: undefined,
  data: [],
};

function saveWarehouses(state: WarehousesState, action: ReturnType<typeof loadWarehousesSuccess>) {
  const warehouses = action.payload.warehouses;

  return {
    ...state,
    ...warehouses,
  };
}

export const warehousesReducer = createReducer(initialState, on(loadWarehousesSuccess, saveWarehouses));
