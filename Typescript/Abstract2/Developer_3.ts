import { Entity } from "./Entity_1";
import { ProgrammingLanguage } from "./ProgrammingLanguage_2";

export class Developer extends Entity {
  constructor(
    id: number,
    name: string,
    public favoriteLanguage: ProgrammingLanguage
  ) {
    super(id, name);
  }

  getDescription(): string {
    return `Developer: ${this.name}, Favorite Language: ${this.favoriteLanguage.name}`;
  }

  displayFavoriteLanguage(): void {
    console.log(this.favoriteLanguage.displayInfo());
  }
}
