import { Novel } from './novel';

describe('Novel book testing', () => {
  let novel: Novel;
  beforeEach(() => {
    novel = new Novel(
      'Майстер і Маргарита.2',
      'Михайло Булгаков',
      480,
      'Роман',
      'Містика'
    );
  });
  //   fit('Створення екземпляру класу', () => {
  //     expect(novel).toBeTruthy();
  //   });
  it('Створення екземпляру класу', () => {
    expect(novel).toBeTruthy();
  });

  it('Створення екземпляру класу з від`ємною кількістю сторінок', () => {
    // expect(() =>
    //   new novel(
    //     'Дракула.2',
    //     'Брем Стокер',
    //     -318,
    //     'Хоррор',
    //     'Готичний хоррор'
    //   ).toThrow(new Error('Від`ємна кількість сторінок'));
    expect(() => {
      new Novel(
        'Майстер і Маргарита.2',
        'Михайло Булгаков',
        -480,
        'Роман',
        'Містика'
      );
    }).toThrow(new Error('pages <=0'));
  });
  //   it('Пошук книг кожного жанру з найменшою кількістю сторінок'), () => {

  //   }
  it('Розрахунок кількості сторінок', () => {
    let n = novel.pages;
    expect(novel.getPages()).toBe(n);
  });
});
