// creating a guest list array
let GuestList = ["Hamza","Abid","Bilal","Rj"];

// making veriable for those guest who can`t come. 
let Dontcome = GuestList[0];

// print the name of guest who  can`t come
console.log(Dontcome,"is not coming.");

// Add and  removes values from array
GuestList.splice(0, 1, "Berlin");

//message print for bigger table
console.log("Good News! We have Found a Bigger Table for Dinner");

// Adding a new guest at starting index of array
GuestList.unshift("Ali");

//Adding a new guest at ending index of array
GuestList.push("Alfa 01");

//Get a middle index of our guest list array
let middleIndex: number = Math.floor(GuestList.length / 2);

// Adding a new guest to middle index of  array
GuestList.splice(middleIndex, 0, "John");

//Print message of  updated list
console.log("Updated list of our Guests");

//Sending a invitation message to our guests one by one with thier name
GuestList.forEach(oneguest => console.log(`Salam ${oneguest}, would you like to dinner with me! `));





