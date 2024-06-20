"use strict";
// Creating a array
let userNames = ["Mahad", "Ali", "Zeeshan", "Admin", "Usman"];
// Using For each loop on array
userNames.forEach(oneuser => {
    if (oneuser === "Admin") {
        console.log(`Hello ${oneuser}, would you like to see a status report?`);
    }
    else {
        console.log(`Hello ${oneuser},thank you for loggin in again.`);
    }
});
