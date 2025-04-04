import { vehicleType } from './class/vehicle-types';
import { Injectable } from '@angular/core';
import { VehicleFactory } from './class/vehicle-factory';
import { IVehicle } from './interface/vehicle.interface';

const API_URL = 'https://api.jsonbin.io/v3/b/67efac888a456b796682551c';
const API_KEY_MASTER = 'YOUR_MASTER_KEY';
const API_KEY_ACCESS = 'YOUR_ACCESS_KEY';

@Injectable({
  providedIn: 'root',
})
export class VehicleReadService {
  public vehicles: IVehicle[] = [];

  constructor() {}

  addVehicle(vehicle: IVehicle) {
    this.vehicles.push(vehicle);
  }
  public async load() {
    try {
      const response = await fetch(API_URL, {
        method: 'GET',
        headers: {
          'X-Master-Key': API_KEY_MASTER,
          'X-Access-Key': API_KEY_ACCESS,
          'Content-Type': 'application/json',
        },
      });
      const json = await response.json();
      console.log('Отримані дані:', json);
      let data = json.record;
      if (!Array.isArray(data)) {
        console.error('Очікувався масив, отримано:', data);
        data = [];
      }
      let vehicles = data.map((item: any) =>
        VehicleFactory.createVehicle(item)
      );
      this.vehicles = vehicles;
    } catch (error) {
      console.error('Помилка при отриманні даних:', error);
    }
  }
}
