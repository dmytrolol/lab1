import { BookFactory } from './book-factory';

describe('Тестування класу BookFactory', () => {
  it('Створення роману', () => {
    let novel = BookFactory.getBook(
      'Майстер і Маргарита',
      'Михайло Булгаков',
      480,
      'Роман',
      'Містика'
    );
    expect(novel).toBeTruthy();
  });
  it('Створення наукової книги', () => {
    let scientificBook = BookFactory.getBook(
      'Походження видів',
      'Чарльз Дарвін',
      502,
      'Наукова книга',
      'Біологія'
    );
    expect(scientificBook).toBeTruthy();
  });
  it('Створення хорррору', () => {
    let horror = BookFactory.getBook(
      'Дракула',
      'Брем Стокер',
      318,
      'Хоррор',
      'Готичний хоррор'
    );
    expect(horror).toBeTruthy();
  });
  it('Створення невідомої книги', () => {
    expect(() =>
      BookFactory.getBook(
        'Походження видів',
        'Чарльз Дарвін',
        502,
        'НЕНаукова книга',
        'Біологія'
      )
    ).toThrow(new Error('Невідома книга'));
  });
});
