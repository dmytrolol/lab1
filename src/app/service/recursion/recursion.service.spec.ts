import { TestBed } from '@angular/core/testing';

import { RecursionService } from './recursion.service';

describe('RecursionService', () => {
  let service: RecursionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RecursionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('Сума ряду за допомогою рекурсії значення x=0.53 y=0.5859', () => {
    let x = 0.53;
    let expY = 0.5859;
    let compY = service.getRecursion(x, x, 1, x);
    expect(compY.toFixed(2)).toBe(expY.toFixed(2));
  });
});
