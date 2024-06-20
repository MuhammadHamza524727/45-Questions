"use strict";
// Define the function to show magicians names
function show_magician(magicians) {
    magicians.forEach(name => console.log(name));
}
// function to make  magician  great through .map() it will modify array
function make_great(magicians) {
    return magicians.map(name => `The Great ${name}`);
}
// define an array of magicians names
let magicians_name = ["Harry Poter", "Berlin", "Alfa 01"];
// making a copy of original array through .slice() function
let copy_magicians_names = magicians_name.slice();
// modify the copied array to include the array with thier names
let copy_great_magicians = make_great(copy_magicians_names);
// show both arrays original and copied
// original
console.log("\nOriginal array\n");
show_magician(magicians_name);
// copied
console.log("\nCopied array\n");
show_magician(copy_great_magicians);
