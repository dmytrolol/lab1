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
  IonTextarea,
} from '@ionic/angular/standalone';
import { ExploreContainerComponent } from '../explore-container/explore-container.component';
import { MyHeaderComponent } from '../my-header/my-header.component';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss'],
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
    IonTextarea,
  ],
})
export class Tab3Page {
  matrixText: string = '';

  generateMatrix(n: any) {
    const size = parseInt(n, 10);
    let negativeOddCount = 0;

    if (isNaN(size) || size <= 0) {
      this.matrixText = 'Невірний розмір матриці';
      return;
    }

    let matrix: string[][] = Array.from({ length: size }, () =>
      Array.from({ length: size }, () => {
        const num = Math.floor(Math.random() * 21) - 10; // числа від -10 до 10
        if (num < 0 && num % 2 !== 0 && num > -10) {
          negativeOddCount++;
          return `<span class="highlight">${num}</span>`;
        } else {
          return `${num}`;
        }
      })
    );

    if (negativeOddCount > 5) {
      this.matrixText = matrix.map((row) => row.join('\t')).join('<br>');
    } else {
      this.matrixText = matrix.map((row) => row.join('\t')).join('<br>');
    }
  }

  constructor() {}
}
