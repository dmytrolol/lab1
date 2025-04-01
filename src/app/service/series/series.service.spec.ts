import { TestBed } from '@angular/core/testing';

import { SeriesService } from './series.service';

describe('SeriesService', () => {
  let service: SeriesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SeriesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('Сума ряду значення x=1 y=1.5574', () => {
    let x = 1;
    let y = 1.5574;
    let y1 = service.getSeries(x);
    expect(y.toFixed(4)).toBe(y1.toFixed(4));
  });
});
