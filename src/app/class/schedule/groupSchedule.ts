import { Lesson } from './lesson';

export class GroupSchedule {
  constructor(public group: string, public lessons: Lesson[]) {}

  // Підрахунок кількості занять на день
  getLessonCountByDay(): Record<string, number> {
    const dayCount: Record<string, number> = {};
    this.lessons.forEach((lesson) => {
      dayCount[lesson.dayOfWeek] = (dayCount[lesson.dayOfWeek] || 0) + 1;
    });
    return dayCount;
  }
}
