"use strict";
let guestList = ["Hamza", "Abid", "Bilal", "Rj"];
let dontcome = guestList[0];
console.log(dontcome, "is not Coming.");
guestList.splice(0, 1, "Berlin");
guestList.forEach(guest => console.log(`Salam ${guest}, would you like to dinner with me?`));
