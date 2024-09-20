import { Developer } from "./Developer_3";
import { Entity } from "./Entity_1";

export class Company extends Entity {
  constructor(id: number, name: string, public developers: Developer[]) {
    super(id, name);
  }

  getDescription(): string {
    return `Company: ${this.name}, Number of Developers: ${this.developers.length}`;
  }

  displayDevelopers(): void {
    this.developers.forEach((dev) => dev.displayInfo());
  }
}
