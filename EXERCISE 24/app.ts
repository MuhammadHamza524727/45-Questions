// Define veriables
let apple = "apple";
let uppercaseApple = "APPLE"
let ten = 10;
let twenty = 20;
let fruits = ["Apple","Banana","Mango"];


// Test for equality with string

console.log("\n Is apple equal to apple?");
console.log(apple == "apple");

// Test  for unequality with string
console.log ("\n Is apple is not to apple?");
console.log( apple != "apple" );

// Test using Lowercase function (True)
console.log("\n Is APPLE is equal to apple after converting to lowercase?");
console.log(uppercaseApple.toLowerCase() == "apple");

// Test using Lowercase function (False)
console.log("\n Is APPLE is not equal to apple after converting to lowercase?")
console.log(uppercaseApple.toLowerCase() != "apple");

// Numerical Testing
// Is equal
console.log("\n Is ten is equal to twenty?");
console.log(ten == twenty);

// is not equal
console.log("\n Is ten is not equal to twenty?");
console.log(ten != twenty);

// Greater than
console.log("\n Is ten is greater than 0?");
console.log( ten > 0);

// Less than
console.log("\n Is twenty is smaller than 10? ");
console.log(twenty < ten);

// Greater than or equal to
console.log("\n Is ten is greater than or equal to 5?");
console.log(ten >= 5);

// Less than or equal to
console.log("\n Is twenty is Less than or equal to 10?");
console.log(twenty <= 10);

// Tests using  "and" or "or" operators true method
// using &&
console.log("\n Is twenty is not equal to 10 and twenty is greater than 10?");
console.log( twenty != 10 &&  twenty > 10);

// Tests using  "and" or "or" operators false method
console.log("\n Is twenty is not equal to 10 and twenty is greater than 10?");
console.log( twenty != 10 &&  twenty > 30);

// Using || (OR)
console.log("\n Is twenty is greater than 50 OR twenty is equal to 20?");
console.log( twenty > 50 ||  twenty == 20);

console.log("\n Is twenty is greater than 50 OR twenty is not equal to 20?");
console.log( twenty > 50 ||  twenty != 20);

// Tests weather an item is include in array
// function .includes
console.log("\n Is Mango is include in my fruits array?");
console.log(fruits.includes("Mango"));

//function ! include (not include)
console.log("\n Is Mango is not  include in my fruits array?");
console.log(!fruits.includes("Mango"));









































