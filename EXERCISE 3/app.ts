// Lower Case
let personName: string = "Hamza"
console.log("lowercase:", personName.toLowerCase());

// Upper Case
console.log("uppercase:", personName.toUpperCase());

// Title Case
console.log("titlecase:", personName.replace(/\bw/g, c => c.toUpperCase()));