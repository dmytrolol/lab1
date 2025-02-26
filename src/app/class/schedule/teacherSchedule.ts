import { Lesson } from './lesson';
import { GroupSchedule } from './groupSchedule';

export class TeacherSchedule {
  private schedule: GroupSchedule[] = [];

  constructor(lessons: Lesson[]) {
    this.groupByGroup(lessons);
  }

  private groupByGroup(lessons: Lesson[]): void {
    const grouped = new Map<string, Lesson[]>();

    lessons.forEach((lesson) => {
      if (!grouped.has(lesson.group)) {
        grouped.set(lesson.group, []);
      }
      grouped.get(lesson.group)?.push(lesson);
    });

    this.schedule = Array.from(
      grouped,
      ([group, lessons]) => new GroupSchedule(group, lessons)
    );
  }

  public getSchedule(): GroupSchedule[] {
    return this.schedule;
  }

  // Підрахунок кількості занять по днях
  public getLessonCountByDay(): Record<string, number> {
    const dayCount: Record<string, number> = {};
    this.schedule.forEach((groupSchedule) => {
      const groupDayCount = groupSchedule.getLessonCountByDay();
      for (const [day, count] of Object.entries(groupDayCount)) {
        dayCount[day] = (dayCount[day] || 0) + count;
      }
    });
    return dayCount;
  }
}
