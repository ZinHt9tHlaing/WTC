import { Entity } from "./Entity_1";

export class ProgrammingLanguage extends Entity {
  constructor(id: number, name: string, public paradigm: string) {
    super(id, name);
  }

  getDescription(): string {
    return `Programming Language: ${this.name}, Paradigm: ${this.paradigm}`;
  }
}
