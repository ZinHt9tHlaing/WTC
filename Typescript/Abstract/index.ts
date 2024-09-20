import { Car } from "./Car";

const tesla = new Car( "Tesla","Model Y", 4, 2010);
tesla.startEngine();

const toyota = new Car("Toyota", "Land Cruiser", 4, 2005);
toyota.startEngine();
toyota.displayInfo();

const suzuki = new Car("Suzuki", "swift", 4, 2008);
suzuki.startEngine();
suzuki.displayInfo();
