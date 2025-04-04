import { IVehicle } from '../interface/vehicle.interface';
export abstract class Vehicle implements IVehicle {
  private id: number = 0;
  private price: number = 1;
  private brand: string = '';
  private model: string = '';
  private year: number = 2000;
  constructor(
    id: number,
    price: number,
    brand: string,
    model: string,
    year: number
  ) {
    if (id < 0) throw new Error('id < 0');
    if (price < 0) throw new Error('price < 0');
    if (year <= 1800) throw new Error('Incorrect year (<= 1800)');
    this.id = id;
    this.price = price;
    this.brand = brand;
    this.model = model;
    this.year = year;
  }
  getId(): number {
    return this.id;
  }
  getPrice(): number {
    return this.price;
  }
  getBrand(): string {
    return this.brand;
  }
  getModel(): string {
    return this.model;
  }
  getYear(): number {
    return this.year;
  }
  getType(): string {
    return 'Транспортний засіб';
  }
}
