"use strict";
// making a function
function make_shirt(size = "Large size", printMessage = "I Love Typescript") {
    console.log(`\n Creating a ${size} shirt with the ${printMessage} prints on shirt.`);
}
// calling a function with by default values
make_shirt();
// Calling a function now  with medium size and default message
make_shirt("Medium size");
// Calling a function now with small size and also different print on message
make_shirt("Small size", "I Love Javascipt");
