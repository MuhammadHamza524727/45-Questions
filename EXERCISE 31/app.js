"use strict";
let userNames = ["Mahad", "Ali", "Zeeshan", "Admin", "Usman"];
userNames = [];
if (userNames.length === 0) {
    console.log("Your Array is Empty we need to find some users!");
}
else {
    // using foreach loop on array
    userNames.forEach(oneuser => {
        if (oneuser === "Admin") {
            console.log(`Hello ${oneuser}, would you like to see a status report?`);
        }
        else {
            console.log(`Hello ${oneuser},thank you for loggin in again.`);
        }
    });
}
