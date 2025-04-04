import { Vehicle } from '../abstract-class/vehicle.abstract';

export class Boat extends Vehicle {
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
    return 'Човен';
  }
}
