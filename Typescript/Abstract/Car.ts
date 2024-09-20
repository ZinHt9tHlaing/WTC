import { Vehicles } from "./vehicle";

export class Car extends Vehicles {
  constructor(
    brand: string,
    model: string,
    public doors: number,
    public releaseYear: number
  ) {
    super(brand, model);
  }

  startEngine(): void {
    console.log(
      `Starting the engine of the car: ${this.brand} ${this.model} releaseYear: ${this.releaseYear}`
    );
  }

  displayInfo(): void {
    console.log(`Doors: ${this.doors}`);
  }
}
