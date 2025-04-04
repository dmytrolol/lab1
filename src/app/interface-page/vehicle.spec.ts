import { vehicleType } from './class/vehicle-types';
import { Car } from './class/car';
import { Truck } from './class/truck';
import { Motorcycle } from './class/motorcycle';
import { Boat } from './class/boat';
import { IVehicle } from './interface/vehicle.interface';
import { VehicleFactory } from './class/vehicle-factory';

describe('VehicleFactory', () => {
  it('should create a Car instance', () => {
    const data = {
      type: vehicleType[0],
      id: 1,
      price: 20000,
      brand: 'Toyota',
      model: 'Camry',
      year: 2022,
    };
    const vehicle: IVehicle = VehicleFactory.createVehicle(data);
    expect(vehicle).toBeInstanceOf(Car);
  });

  it('should create a Truck instance', () => {
    const data = {
      type: vehicleType[1],
      id: 2,
      price: 50000,
      brand: 'Volvo',
      model: 'FH',
      year: 2023,
    };
    const vehicle: IVehicle = VehicleFactory.createVehicle(data);
    expect(vehicle).toBeInstanceOf(Truck);
  });

  it('should create a Motorcycle instance', () => {
    const data = {
      type: vehicleType[2],
      id: 3,
      price: 10000,
      brand: 'Honda',
      model: 'CBR',
      year: 2021,
    };
    const vehicle: IVehicle = VehicleFactory.createVehicle(data);
    expect(vehicle).toBeInstanceOf(Motorcycle);
  });

  it('should create a Boat instance', () => {
    const data = {
      type: vehicleType[3],
      id: 4,
      price: 75000,
      brand: 'Yamaha',
      model: '212X',
      year: 2020,
    };
    const vehicle: IVehicle = VehicleFactory.createVehicle(data);
    expect(vehicle).toBeInstanceOf(Boat);
  });
});
