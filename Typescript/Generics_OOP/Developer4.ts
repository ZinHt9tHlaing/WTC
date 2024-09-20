import { ProgrammingLanguage } from "./ProgrammingLanguage3";

export class Developer {
  constructor(
    public id: string,
    public name: string,
    public favoriteLanguage: ProgrammingLanguage
  ) {}
}
