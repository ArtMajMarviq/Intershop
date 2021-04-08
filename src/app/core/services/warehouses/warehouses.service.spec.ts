import { TestBed } from '@angular/core/testing';
import { instance, mock } from 'ts-mockito';

import { ApiService } from 'ish-core/services/api/api.service';

import { WarehousesService } from './warehouses.service';

describe('Warehouses Service', () => {
  let apiServiceMock: ApiService;
  let warehousesService: WarehousesService;

  beforeEach(() => {
    apiServiceMock = mock(ApiService);
    TestBed.configureTestingModule({
      providers: [{ provide: ApiService, useFactory: () => instance(apiServiceMock) }],
    });
    warehousesService = TestBed.inject(WarehousesService);
  });

  it('should be created', () => {
    expect(warehousesService).toBeTruthy();
  });
});
