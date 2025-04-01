import { Injectable, Optional } from '@angular/core';
import { LogService } from '../logger/log.service';

@Injectable({
  providedIn: 'root',
})
export class RecursionService {
  yy: number = 0;
  private xy = new Map();
  constructor(@Optional() private logService: LogService) {}
  getRecursion(x: number, term: number, n: number, sum: number): number {
    let min = 1e-12;
    if (Math.abs(term) < min || n > 100) {
      return sum;
    }
    term *= (x * x * (2 * n - 1)) / (2 * n + 1);
    sum += term;
    n++;
    return this.getRecursion(x, term, n, sum);
  }

  getTab(xn: number = -1.56, xk: number = 1.56, h: number = 0.1) {
    this.xy.clear();
    let x = xn;
    while (x <= xk) {
      let y;
      if (Math.abs(x) > 0.5) {
        console.warn(
          'x виходить за область збіжності ряду. Застосовується Math.tan(x)'
        );
        y = Math.tan(x);
      } else {
        y = this.getRecursion(x, x, 1, x);
      }
      this.xy.set(x, y);
      if (this.logService) {
        this.logService.write(`x= ${x.toFixed(2)} y= ${y.toFixed(4)}`);
      }
      x = parseFloat((x + h).toFixed(10));
    }
    return this.xy;
  }
}
