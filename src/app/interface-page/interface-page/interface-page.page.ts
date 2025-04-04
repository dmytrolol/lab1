import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {
  IonContent,
  IonHeader,
  IonTitle,
  IonToolbar,
  IonCard,
  IonCardHeader,
  IonItem,
  IonInput,
  IonCardContent,
  IonButton,
  IonCardTitle,
  IonList,
  IonLabel,
  IonCardSubtitle,
} from '@ionic/angular/standalone';
import { MyHeaderComponent } from './../../my-header/my-header.component';
import { VehicleReadService } from '../vehicle-read-service.service';
import { IVehicle } from '../interface/vehicle.interface';

@Component({
  selector: 'app-interface-page',
  templateUrl: './interface-page.page.html',
  styleUrls: ['./interface-page.page.scss'],
  standalone: true,
  imports: [
    IonContent,
    IonHeader,
    IonTitle,
    IonToolbar,
    CommonModule,
    FormsModule,
    MyHeaderComponent,
    IonCard,
    IonCardHeader,
    IonItem,
    IonInput,
    IonCardContent,
    IonButton,
    IonCardTitle,
    IonList,
    IonLabel,
    IonCardSubtitle,
  ],
})
export class InterfacePagePage implements OnInit {
  vehicles: IVehicle[] = [];

  constructor(private vehicleService: VehicleReadService) {}

  async ngOnInit() {
    await this.vehicleService.load();
    this.vehicles = this.vehicleService.vehicles;
  }
}
