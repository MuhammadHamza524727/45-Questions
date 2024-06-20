"use strict";
//Making a array of countries and  print its original order
let countriesToVisit = ["China", "Denmark", "Brazil", "Argentina"];
console.log(`Original Order:`, countriesToVisit);
//print the array in alphabetical order without modifying the actual list
console.log(`Alphabetical Order:`, [...countriesToVisit].sort());
//show that the array is still in its original order 
console.log(`Still in Original order:`, countriesToVisit);
//print the array in reverse order without modifying the actual array list
console.log(`Reverse Order:`, [...countriesToVisit].reverse());
//show that the array is still in its original order 
console.log(`Still in Original order:`, countriesToVisit);
//we have change the original array order now
console.log(`Original Array  reverse:`, countriesToVisit.reverse());
//print the array to show that its back  to its to original  order 
console.log(`Back to Original order:`, countriesToVisit.reverse());
//print the array to  show that its order has been changed in alphabetical order now
console.log(`Sorted in Alphabetical order:`, countriesToVisit.sort());
//we have changed the again original array order now in reverse order again
console.log(`Original Array  Reversed Again:`, countriesToVisit.reverse());
