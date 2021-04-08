import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { map, switchMap } from 'rxjs/operators';

import { WarehousesService } from 'ish-core/services/warehouses/warehouses.service';
import {
  loadWarehouses,
  loadWarehousesFail,
  loadWarehousesSuccess,
} from 'ish-core/store/shopping/warehouses/warehouses.actions';
import { mapErrorToAction } from 'ish-core/utils/operators';

import { WarehousesState } from './warehouses.reducer';

@Injectable()
export class WarehousesEffects {
  constructor(private actions$: Actions, private wareHousesService: WarehousesService) {}

  loadWareHouses$ = createEffect(() =>
    this.actions$.pipe(
      ofType(loadWarehouses),
      switchMap(() =>
        this.wareHousesService.getWarehouses().pipe(
          map((warehouses: WarehousesState) => loadWarehousesSuccess({ warehouses })),
          mapErrorToAction(loadWarehousesFail)
        )
      )
    )
  );
}
