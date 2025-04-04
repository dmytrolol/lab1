import { TestBed } from '@angular/core/testing';

import { VehicleReadService } from './vehicle-read-service.service';

describe('VehicleReadServiceService', () => {
  let service: VehicleReadService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(VehicleReadService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
