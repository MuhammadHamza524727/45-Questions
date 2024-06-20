"use strict";
// define a function  with a rest parameter that accepts items arguemnet representing our sandwich
function makeSandwich(...items) {
    console.log("Making a sandwich with the folowing items: \n ");
    items.forEach(singleItem => console.log(singleItem));
    console.log("\n Now Enjoy Your Sandwich \n");
}
// call the function with 3 times with 3 different  number of arguements
makeSandwich("Chicken", "Cheese", "Mayo", "Egg");
makeSandwich("Bread", "Butter");
makeSandwich("Bread", "Butter", "Chicken", "Cheese", "Mayo", "Egg", "Tomato", "Ketchup");
