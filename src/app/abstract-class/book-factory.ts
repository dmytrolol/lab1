import { Book } from '../class/abstract/book';
import { BooksNameMap } from './book-types';
import { Novel } from '../class/abstract/novel';
import { Horror } from '../class/abstract/horror';
import { ScientificBook } from '../class/abstract/scientificBook';

export class BookFactory {
  public static getBook(
    title: string,
    author: string,
    pages: number,
    type: string,
    parameter: string
  ): Book {
    if (type === BooksNameMap['Novel'])
      return new Novel(title, author, pages, type, parameter);
    else if (type === BooksNameMap['ScientificBook'])
      return new ScientificBook(title, author, pages, type, parameter);
    else if (type === BooksNameMap['Horror'])
      return new Horror(title, author, pages, type, parameter);
    else throw new Error('Невідома книга');
  }
}
