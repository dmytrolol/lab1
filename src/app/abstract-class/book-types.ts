export type BookName = 'Роман' | 'Наукова книга';

export type BookNameMap = {
  [key: string]: BookName;
};

// масив узагальненого типу
export const BooksNameMap: BookNameMap = {
  Novel: 'Роман',
  ScientificBook: 'Наукова книга',
};
