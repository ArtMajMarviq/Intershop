import { createSelector } from '@ngrx/store';

import { ShoppingState, getShoppingState } from 'ish-core/store/shopping/shopping-store';

export const getWarehousesState = createSelector(getShoppingState, (state: ShoppingState) => state.warehouses);

export const getWarehouses = createSelector(getWarehousesState, warehouseData => warehouseData.data);

export const getWarehousesCategoryTitle = createSelector(getWarehousesState, warehouseData => warehouseData.title);

export const getWarehousesDescription = createSelector(getWarehousesState, warehouseData => warehouseData.description);
