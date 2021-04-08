import { Injectable } from '@angular/core';

import { ApiService } from 'ish-core/services/api/api.service';

@Injectable({ providedIn: 'root' })
export class WarehousesService {
  constructor(private apiService: ApiService) {}

  getWarehouses() {
    return this.apiService.get('warehouses');
  }
}
