import { Book } from './book';

export class Horror extends Book {
  constructor(
    override title: string,
    override author: string,
    override pages: number,
    override type: string,
    override parameter: string
  ) {
    super(title, author, pages, type, parameter);
  }
  show() {
    return (
      'Назва: ' +
      this.title +
      ', автор: ' +
      this.author +
      ', кількість сторінок: ' +
      this.pages +
      ' піджанр: ' +
      this.parameter
    );
  }
}
