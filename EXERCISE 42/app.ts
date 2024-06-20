// Define the function to show magicians names
function show_magician (magicians:string[]){
    magicians.forEach(name => console.log(name));
}

// function to make  magician  great through .map() it will modify array
function make_great ( magicians:string[]){
   return magicians.map(name => `The Great ${name}`);
}

// define an array of magicians names
let magicians_name = ["Harry Poter","Berlin","Alfa 01"]

// call make great to function to modified megicians names
let great_magicians = make_great(magicians_name);

// call show megicians that show modified to list of magicians
show_magician(great_magicians);