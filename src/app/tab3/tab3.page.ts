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

    if (isNaN(size) || size <= 0) {
      this.matrixText = 'Невірний розмір матриці';
      return;
    }

    let negativeOddNumbers: number[] = [];

    // створення матриці і знаходження непарні від’ємні елементи > -10
    let rawMatrix: number[][] = Array.from({ length: size }, () =>
      Array.from({ length: size }, () => {
        const num = Math.floor(Math.random() * 21) - 10; // числа від -10 до 10
        if (num < 0 && num % 2 !== 0 && num > -10) {
          negativeOddNumbers.push(num);
        }
        return num;
      })
    );

    console.log(`Кількість підсвічених чисел: ${negativeOddNumbers.length}`);

    // якщо кількість непарних від’ємних чисел > -10 більше 5, тоді підсвічуються
    let matrix = rawMatrix.map((row) =>
      row.map((num) => {
        if (
          negativeOddNumbers.length > 5 &&
          num < 0 &&
          num % 2 !== 0 &&
          num > -10
        ) {
          return `<span class="highlight">${num}</span>`;
        }
        return `${num}`;
      })
    );

    this.matrixText = matrix.map((row) => row.join('\t')).join('<br>');
  }

  constructor() {}
}
