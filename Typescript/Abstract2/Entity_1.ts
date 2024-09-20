export abstract class Entity {
  constructor(public id: number, public name: string) {}

  abstract getDescription(): string;

  displayInfo(): void {
    console.log(this.getDescription());
  }
}
