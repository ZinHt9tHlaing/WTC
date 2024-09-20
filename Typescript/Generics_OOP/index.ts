import { Developer } from "./Developer4";
import { ProgrammingLanguage } from "./ProgrammingLanguage3";
import { Repository } from "./Repository2";

const language = new Repository<ProgrammingLanguage>();
const developer = new Repository<Developer>();

const java = new ProgrammingLanguage("1", "Java", "OOP");
const javascript = new ProgrammingLanguage("2", "JavaScript", "Multi-Paradigm");
const python = new ProgrammingLanguage("3", "Python", "Scripting Paradigm");
const php = new ProgrammingLanguage("4", "PHP", "OOP");

language.add(java);
language.add(javascript);
language.add(python);
language.add(php);

const li = language.get("1");
// console.log(li);
// language.remove("4");
// console.log("name :", li?.name);
// console.log("paradigm :", li?.paradigm);
// console.log(language.getAll());

const dev1 = new Developer("1", "Mg Mg", java);
const dev2 = new Developer("2", "Zin Htet", javascript);
const dev3 = new Developer("3", "Jue Jue", python);
const dev4 = new Developer("4", "Su Su", php);

developer.add(dev1);
developer.add(dev2);
developer.add(dev3);
developer.add(dev4);

const dev = developer.get("2");
// console.log(dev);
const allDev = developer.getAll();
developer.remove("4");
// console.log(developer.getAll());
let d2 = developer.get("2");
let d3 = developer.get("3");
console.log("name :", d3?.name);
console.log("name :", d3?.favoriteLanguage.name);
console.log("paradigm :", d3?.favoriteLanguage.paradigm);
