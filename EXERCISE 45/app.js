"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Define a function loop to create a car object with optional option
function make_car(manufacturer, model, ...option) {
    // initilize a car object with manufacturer and model
    let car = { manufacturer: model };
    // add aditional options to the car  object
    option.forEach((elem) => {
        console.log(elem);
    });
    return car;
}
// print the variable to ensure to all the information is stored correctly in the car  object
console.log(make_car("Toyota", "Corolla", ["color", "Black"], ["Year", 2019]));
console.log(make_car("Civic", "Cultus", ["color", "Blue"], ["Year", 2019]));
