import { vehicleType } from './vehicle-types';
import { Car } from './car';
import { Truck } from './truck';
import { Motorcycle } from './motorcycle';
import { Boat } from './boat';
import { IVehicle } from '../interface/vehicle.interface';

export class VehicleFactory {
  static createVehicle(data: any): IVehicle {
    switch (data.type) {
      case vehicleType[0]:
        return new Car(data.id, data.price, data.brand, data.model, data.year);
      case vehicleType[1]:
        return new Truck(
          data.id,
          data.price,
          data.brand,
          data.model,
          data.year
        );
      case vehicleType[2]:
        return new Motorcycle(
          data.id,
          data.price,
          data.brand,
          data.model,
          data.year
        );
      case vehicleType[3]:
        return new Boat(data.id, data.price, data.brand, data.model, data.year);
      default:
        throw new Error(`Невідомий тип транспорту: ${data.type}`);
    }
  }
}
