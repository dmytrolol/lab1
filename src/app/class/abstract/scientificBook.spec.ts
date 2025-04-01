import { ScientificBook } from './scientificBook';

describe('scientificBook book testing', () => {
  let scientificBook: ScientificBook;
  beforeEach(() => {
    scientificBook = new ScientificBook(
      'Походження видів.2',
      'Чарльз Дарвін',
      502,
      'Наукова книга',
      'Біологія'
    );
  });
  //   fit('Створення екземпляру класу', () => {
  //     expect(scientificBook).toBeTruthy();
  //   });
  it('Створення екземпляру класу', () => {
    expect(scientificBook).toBeTruthy();
  });

  it('Створення екземпляру класу з від`ємною кількістю сторінок', () => {
    // expect(() =>
    //   new scientificBook(
    //     'Дракула.2',
    //     'Брем Стокер',
    //     -318,
    //     'Хоррор',
    //     'Готичний хоррор'
    //   ).toThrow(new Error('Від`ємна кількість сторінок'));
    expect(() => {
      new ScientificBook(
        'Походження видів.2',
        'Чарльз Дарвін',
        -502,
        'Наукова книга',
        'Біологія'
      );
    }).toThrow(new Error('pages <=0'));
  });
  //   it('Пошук книг кожного жанру з найменшою кількістю сторінок'), () => {

  //   }
  it('Розрахунок кількості сторінок', () => {
    let n = scientificBook.pages;
    expect(scientificBook.getPages()).toBe(n);
  });
});
