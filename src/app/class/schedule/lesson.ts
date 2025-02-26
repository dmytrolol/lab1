export class Lesson {
  public date: string;
  public dayOfWeek: string;
  public subject: string;
  public group: string;
  public classroom: string;

  constructor(
    date: string,
    dayOfWeek: string,
    subject: string,
    group: string,
    classroom: string
  ) {
    this.date = date;
    this.dayOfWeek = dayOfWeek;
    this.subject = subject;
    this.group = group;
    this.classroom = classroom;
  }
}
