import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MyHeaderComponent } from './../my-header/my-header.component';

import {
  IonContent,
  IonHeader,
  IonTitle,
  IonToolbar,
  IonCard,
  IonCardHeader,
  IonCardTitle,
  IonCardContent,
  IonList,
  IonItem,
  IonLabel,
  IonButton,
} from '@ionic/angular/standalone';

import { Book } from '../class/abstract/book';
import { BookFactory } from './book-factory';

@Component({
  selector: 'app-abstract-class',
  templateUrl: './abstract-class.page.html',
  styleUrls: ['./abstract-class.page.scss'],
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
    IonCardTitle,
    IonCardContent,
    IonList,
    IonItem,
    IonLabel,
    IonButton,
  ],
})
export class AbstractClassPage implements OnInit {
  ngOnInit(): void {
    this.load();
  }

  data: any = [];
  books: Book[] = [];
  minBooks: Book[] = [];
  dataUrl = 'https://api.jsonbin.io/v3/b/67cb3ad4e41b4d34e4a285ec';
  async load() {
    this.data = [];
    this.books = [];
    fetch(this.dataUrl)
      .then((res) => res.json())
      .then((json) => {
        this.data = json;
        this.data = this.data.record;
        let i = 0;
        while (this.data[i] != undefined) {
          let f = BookFactory.getBook(
            this.data[i]['title'],
            this.data[i]['author'],
            this.data[i]['pages'],
            this.data[i]['type'],
            this.data[i]['genre'] || this.data[i]['field']
          );
          f.getPages();
          this.books.push(f);
          i++;
        }
      });
  }
  findMinBooks() {
    let minBooksMap: { [key: string]: Book } = {};

    this.books.forEach((book) => {
      if (
        !minBooksMap[book.type] ||
        book.pages < minBooksMap[book.type].pages
      ) {
        minBooksMap[book.type] = book;
      }
    });

    this.minBooks = Object.values(minBooksMap);
  }
}
