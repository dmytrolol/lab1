import { Injectable, Optional } from '@angular/core';
import { LogService } from '../logger/log.service';

@Injectable({
  providedIn: 'root',
})
export class TabService {
  private xx: string[] = [];
  private yy: number[] = [];
  constructor(@Optional() private logService: LogService) {}
  getTab(xn: number = -1.56, xk: number = 1.56, h: number = 0.1) {
    let x = xn;
    let y = 0.0;
    this.xx = [];
    this.yy = [];
    while (x <= xk) {
      y = Math.tan(x);
      this.xx.push(x.toFixed(2));
      this.yy.push(y);
      if (this.logService)
        this.logService.write('x = ' + x.toFixed(2) + ' y  = ' + y.toFixed(4));
      x = x + h;
    }
    return { x: this.xx, y: this.yy };
  }
}
