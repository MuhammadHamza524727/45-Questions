// define a function to print each megician name from an array
function show_magicians(magician:string[]){
    magician.forEach(name => console.log(name));
}
// define an array containing magicians name
let magician_names = ["Harry Poter","Berlin","Alfa 01"] 

// call the function to print each magacian name
show_magicians(magician_names);