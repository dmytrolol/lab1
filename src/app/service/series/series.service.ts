import { Injectable, Optional } from '@angular/core';
import { LogService } from '../logger/log.service';

@Injectable({
  providedIn: 'root',
})
export class SeriesService {
  private xy = new Map();
  constructor(@Optional() private logService: LogService) {}
  getSeries(x: number) {
    if (Math.abs(x) > 0.5) {
      console.warn(
        'x виходить за область збіжності ряду. Застосовується Math.tan(x)'
      );
      return Math.tan(x);
    }
    let sum = x;
    let term = x;
    const min = 1e-12;
    const maxIterations = 15;
    for (let n = 1; n <= maxIterations; n++) {
      term *= (x * x * (2 * n - 1)) / (2 * n + 1);
      sum += term;
      if (Math.abs(term) < min) break;
    }
    return sum;
  }
  getTab(xn: number = -1.0, xk: number = 1.0, h: number = 0.1) {
    this.xy.clear();
    try {
      for (let x = xn; x <= xk; x += h) {
        let y = this.getSeries(x);
        this.xy.set(x, y);

        if (this.logService) {
          this.logService.write(`x= ${x.toFixed(2)} y= ${y.toFixed(4)}`);
        }
      }
    } catch (error) {
      console.error('Помилка: ', error);
    }
    return this.xy;
  }
}
