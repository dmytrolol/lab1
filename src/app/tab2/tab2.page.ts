import { Component } from '@angular/core';
import {
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonCard,
  IonCardHeader,
  IonCardTitle,
  IonCardContent,
  IonItem,
  IonInput,
  IonButton,
} from '@ionic/angular/standalone';
import { ExploreContainerComponent } from '../explore-container/explore-container.component';
import { MyHeaderComponent } from '../my-header/my-header.component';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss'],
  standalone: true,
  imports: [
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    ExploreContainerComponent,
    MyHeaderComponent,
    IonCard,
    IonCardHeader,
    IonCardTitle,
    IonCardContent,
    IonItem,
    IonInput,
    IonButton,
  ],
})
export class Tab2Page {
  numbersList: string = '';
  count: number = 0;

  calculate(a: any, b: any) {
    const start = parseInt(a, 10);
    const end = parseInt(b, 10);

    if (isNaN(start) || isNaN(end) || start > end) {
      this.numbersList = 'Некоректний ввід';
      this.count = 0;
      return;
    }

    const result: number[] = [];

    for (let i = start; i <= end; i++) {
      if (i % 2 === 0 && i % 3 === 2) {
        result.push(i);
      }
    }

    this.numbersList = result.join(', ');
    this.count = result.length;
  }
  constructor() {}
}
