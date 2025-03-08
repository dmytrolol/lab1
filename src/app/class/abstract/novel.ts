import { Book } from './book';

export class Novel extends Book {
  constructor(
    override title: string,
    override author: string,
    override pages: number,
    // override genre: string
    override type: string,
    override parameter: string
  ) {
    super(title, author, pages, type, parameter);
  }
  show() {
    // return (
    //   'Назва: ' +
    //   this.title +
    //   ', автор: ' +
    //   this.author +
    //   ', кількість сторінок: ' +
    //   this.pages +
    //   ' жанр: ' +
    //   this.parameter
    // );
    return `
      <h2>${this.title}</h2>
      <p>Автор: ${this.author}</p>
      <p>Сторінок: ${this.pages}</p>
      <p>Жанр: ${this.parameter}</p>
    `;
  }
}
