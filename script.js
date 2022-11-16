import { NewCar } from "./newCar.js";
import { Cars } from "./cars.js";
import { OldCar } from "./oldCar.js";

let mySeat = new OldCar("Seat", "Ibiza", "White", "3 Doors");
// myFord.printSpecs();

console.log("");

let myCupra = new NewCar("Cupra", "Leon", "Black", "5 Doors", "BeatsAudio");
// myTesla.printSpecs();

let allMyCars = new Cars();
allMyCars.addCar(mySeat);
allMyCars.addCar(myCupra);

console.log(allMyCars.cars);

allMyCars.printAllMyCars();
