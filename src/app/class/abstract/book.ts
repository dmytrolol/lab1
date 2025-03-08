export abstract class Book {
  title: string = '';
  author: string = '';
  pages: number = 0;
  type: string = '';
  parameter: string = '';
  constructor(
    title: string,
    author: string,
    pages: number,
    type: string,
    parameter: string
  ) {
    if (pages <= 0) throw new Error('pages <=0');
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.type = type;
    this.parameter = parameter;
  }

  getPages(): number {
    return this.pages;
  }

  displayInfo() {
    return (
      'Назва: ' +
      this.title +
      ', автор: ' +
      this.author +
      ', кількість сторінок: ' +
      this.pages
    );
  }
  abstract show(): void;
}
