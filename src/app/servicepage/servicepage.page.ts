import { RecursionService } from './../service/recursion/recursion.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {
  IonContent,
  IonHeader,
  IonTitle,
  IonToolbar,
  IonCard,
  IonCardHeader,
  IonItem,
  IonInput,
  IonCardContent,
  IonButton,
  IonCardTitle,
  IonList,
  IonLabel,
} from '@ionic/angular/standalone';
import { MyHeaderComponent } from '../my-header/my-header.component';
import { TabService } from '../service/tab/tab.service';
import { SeriesService } from '../service/series/series.service';
import { Chart, registerables } from 'chart.js/auto';
import { ElementRef } from '@angular/core';

@Component({
  selector: 'app-servicepage',
  templateUrl: './servicepage.page.html',
  styleUrls: ['./servicepage.page.scss'],
  standalone: true,
  imports: [
    IonContent,
    IonHeader,
    IonTitle,
    IonToolbar,
    CommonModule,
    FormsModule,
    MyHeaderComponent,
    IonCard,
    IonCardHeader,
    IonItem,
    IonInput,
    IonCardContent,
    IonButton,
    IonCardTitle,
    IonList,
    IonLabel,
  ],
})
export class ServicepagePage implements OnInit {
  xyTab = new Map();
  xySeries = new Map();
  xyRecursion = new Map();
  xyInput: string[] = [];
  constructor(
    private tabService: TabService,
    private seriesService: SeriesService,
    private recursionService: RecursionService
  ) {
    Chart.register(...registerables);
  }
  xx: string[] = [];
  yySer: number[] = [];
  yyRec: number[] = [];
  yyTab: number[] = [];
  @ViewChild('lineCanvas') private lineCanvas?: ElementRef;
  lineChart: any;
  lineChartMake() {
    if (this.lineChart instanceof Chart) {
      this.lineChart.destroy();
    }
    this.lineChart = new Chart(this.lineCanvas?.nativeElement, {
      type: 'line',
      data: {
        labels: this.xx,
        datasets: [
          {
            label: 'Табулювання',
            data: this.yyTab,
            fill: false,
            borderColor: 'salmon',
            borderWidth: 1,
            borderDashOffset: 0.0,
            pointRadius: 2,
            spanGaps: false,
          },
          {
            label: 'Рекурсія',
            data: this.yyRec,
            fill: false,
            borderColor: 'red',
            borderWidth: 1,
            borderDashOffset: 0.0,
            pointRadius: 4,
            spanGaps: false,
          },
          {
            label: 'Ряд',
            data: this.yySer,
            fill: false,
            borderColor: 'green',
            borderWidth: 1,
            borderDashOffset: 0.0,
            pointRadius: 6,
            spanGaps: false,
          },
        ],
      },
      options: {
        responsive: true,
        scales: {
          x: {
            suggestedMin: 0,
            title: {
              display: true,
              text: 'X',
            },
            ticks: {
              stepSize: 0.001,
            },
          },
          y: {
            title: {
              display: true,
              text: 'Y',
            },
            ticks: {
              stepSize: 0.001,
            },
          },
        },
      },
    });
  }
  xn: number = -1.56;
  xk: number = 1.56;
  h: number = 0.1;
  ras() {
    try {
      // let xn1 = parseFloat(xn);
      // let xk1 = parseFloat(xk);
      // let h1 = parseFloat(h);
      let xn1 = parseFloat(this.xn.toString());
      let xk1 = parseFloat(this.xk.toString());
      let h1 = parseFloat(this.h.toString());
      this.xx = [];
      this.yyTab = [];
      console.log('Табулювання');
      let obj = this.tabService.getTab(xn1, xk1, h1);
      this.xx = obj.x;
      this.yyTab = obj.y;
      console.log(obj.x);
      console.log(obj.y);
      console.log('Ряд');
      this.xySeries = this.seriesService.getTab(xn1, xk1, h1);
      console.log(this.xySeries);
      console.log('Рекурсія');
      this.xyRecursion = this.recursionService.getTab(xn1, xk1, h1);
      console.log(this.xyRecursion);
      this.input();
      this.lineChartMake();
    } catch {}
  }

  isApproximatelyEqual(
    a: number,
    b: number,
    tolerance: number = 0.0001
  ): boolean {
    return Math.abs(a - b) < tolerance;
  }

  input() {
    console.log('початок роботи input()');
    this.yySer = new Array();
    this.yyRec = new Array();
    this.xyInput = [];
    console.log('xx:', this.xx);
    console.log('yyTab:', this.yyTab);
    console.log('xySeries:', this.xySeries);
    console.log('xyRecursion:', this.xyRecursion);
    try {
      this.xx.forEach((value1, index) => {
        let value = parseFloat(value1);
        value = Math.round(value * 10000) / 10000;
        let s = '';
        let y: number = 0;

        y = this.yyTab[index];
        if (y !== undefined) {
          s = y.toFixed(4) + ' ';
        } else {
          console.error(`Помилка: yyTab[${index}] є undefined`);
        }

        let found = false;
        this.xySeries.forEach((val, key) => {
          if (this.isApproximatelyEqual(value, key)) {
            found = true;
            y = val;
            this.yySer.push(y);
            s = s + y.toFixed(4);
          }
        });
        if (!found) {
          console.error(`Помилка: xySeries не має ключа для значення ${value}`);
        }

        if (this.xyRecursion.has(value)) {
          y = this.xyRecursion.get(value);
          this.yyRec.push(y);
          s = s + ' ' + y.toFixed(4);
        } else {
          console.error(`Помилка: xyRecursion не має ключа ${value}`);
        }
        console.log(s);
        this.xyInput.push(s);
      });
    } catch (error) {
      console.error('Помилка:', error);
    }
    console.log('кінець роботи input()');
  }
  ngOnInit() {}
}
