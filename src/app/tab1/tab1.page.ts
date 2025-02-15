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
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
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
export class Tab1Page {
  d: number = 0;
  calculate(a: any, b: any, c: any) {
    const num1 = parseInt(a, 10);
    const num2 = parseInt(b, 10);
    const num3 = parseInt(c, 10);

    const sum = num1 + num2 + num3;

    if (sum % 2 !== 0) {
      const numbers = [num1, num2, num3];
      const n = numbers.filter((num) => num % 27 === 0);
      this.d = n.length;
    } else {
      this.d = 0;
    }
  }
  constructor() {}
}
