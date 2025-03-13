import { MyHeaderComponent } from './../my-header/my-header.component';
import {
  Component,
  OnInit,
  ViewChild,
  ElementRef,
  asNativeElements,
} from '@angular/core';
import { Chart, registerables } from 'chart.js/auto';

import { Lesson } from '../class/schedule/lesson';
import { TeacherSchedule } from '../class/schedule/teacherSchedule';
import { GroupSchedule } from '../class/schedule/groupSchedule';

import { CommonModule } from '@angular/common';

import {
  IonContent,
  IonHeader,
  IonTitle,
  IonToolbar,
  IonList,
  IonItemDivider,
  IonLabel,
  IonItem,
  LoadingController,
  IonButton,
  IonButtons,
  IonMenuButton,
} from '@ionic/angular/standalone';

@Component({
  selector: 'app-cloud',
  templateUrl: './cloud.page.html',
  styleUrls: ['./cloud.page.scss'],
  standalone: true,
  imports: [
    IonContent,
    IonHeader,
    IonTitle,
    IonToolbar,
    IonItemDivider,
    IonList,
    IonLabel,
    IonItem,
    CommonModule,
    IonButton,
    IonButtons,
    IonMenuButton,
    MyHeaderComponent,
  ],
})
export class CloudPage implements OnInit {
  @ViewChild('lineCanvas') private lineCanvas?: ElementRef;
  lessons: Lesson[] = [];
  teacherSchedule!: TeacherSchedule;
  groupedLessons: { [key: string]: Lesson[] } = {};
  apiUrl = 'https://api.jsonbin.io/v3/b/67bdc68bacd3cb34a8f01c18';
  lineChart: any;

  constructor() {
    Chart.register(...registerables);
  }

  ngOnInit() {
    this.load();
  }

  async load() {
    try {
      const response = await fetch(this.apiUrl);
      const data = await response.json();

      if (data && data.record) {
        // перетворення JSON у масив об'єктів Lesson
        this.lessons = data.record.flatMap((day: any) =>
          day.lessons.map(
            (lesson: any) =>
              new Lesson(
                day.date,
                day.dayOfWeek,
                lesson.subject,
                lesson.group,
                lesson.auditorium
              )
          )
        );

        this.teacherSchedule = new TeacherSchedule(this.lessons);
        this.groupLessonsByGroup();
        this.initChart();
      } else {
        console.error('Невірний формат JSON:', data);
      }
    } catch (error) {
      console.error('Помилка завантаження даних:', error);
    }
  }

  // групування занять по групах
  groupLessonsByGroup() {
    this.groupedLessons = {};
    this.lessons.forEach((lesson) => {
      if (!this.groupedLessons[lesson.group]) {
        this.groupedLessons[lesson.group] = [];
      }
      this.groupedLessons[lesson.group].push(lesson);
    });
  }

  // отримання ключів для груп
  getGroupedLessonsKeys(): string[] {
    return Object.keys(this.groupedLessons);
  }

  initChart() {
    if (!this.lineCanvas || !this.lineCanvas.nativeElement) {
      console.error('Помилка: lineCanvas не знайдено');
      return;
    }

    const dayCount = this.teacherSchedule.getLessonCountByDay();
    const labels = Object.keys(dayCount);
    const data = Object.values(dayCount);

    if (this.lineChart) {
      this.lineChart.destroy();
    }

    this.lineChart = new Chart(this.lineCanvas.nativeElement, {
      type: 'bar',
      data: {
        labels: labels,
        datasets: [
          {
            label: 'Кількість занять по днях',
            data: data,
            backgroundColor: 'rgba(75, 192, 192, 0.2)',
            borderColor: 'rgba(75, 192, 192, 1)',
            borderWidth: 1,
          },
        ],
      },
    });
  }
}
