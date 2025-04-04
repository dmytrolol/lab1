import { Vehicle } from '../abstract-class/vehicle.abstract';

export class Truck extends Vehicle {
  constructor(
    id: number,
    price: number,
    brand: string,
    model: string,
    year: number
  ) {
    super(id, price, brand, model, year);
  }

  override getType(): string {
    return 'Вантажний автомобіль';
  }
}
