import { Company } from "./Company_4";
import { Developer } from "./Developer_3";
import { ProgrammingLanguage } from "./ProgrammingLanguage_2";

const java = new ProgrammingLanguage(1, "Java", "OOP");
const javascript = new ProgrammingLanguage(1, "JavaScript", "Multi");
const dotnet = new ProgrammingLanguage(1, "DotNet", "OOP");
// console.log(java.getDescription());

const dev1 = new Developer(1, "Mg Mg", java);
const dev2 = new Developer(1, "Mg Mg", javascript);
const dev3 = new Developer(1, "Mg Mg", dotnet);
// dev1.displayFavoriteLanguage();

const apple = new Company(1, "Apple", [dev1, dev2, dev3]);
const samsung = new Company(1, "Samsung", [dev1, dev2, dev3]);
const microsoft = new Company(1, "Microsoft", [dev1, dev2, dev3]);
apple.displayDevelopers();
