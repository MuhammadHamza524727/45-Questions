// ARRAY of current users
let current_Users = ["Usman","ali","Areeba","Zain","Osama"];

// array of new users
let new_users = ["Hamza","Aisha","Ali","Mahad","Areeba"];

// loop through new users to check for username avaibility
new_users.forEach(new_one_User => {
    // Makin a condition for username already exits and save our_condition variable
    let our_condition = current_Users.some(current_one_user => current_one_user.toLocaleLowerCase() === new_one_User.toLowerCase())
    
    //Print different massages using if-else statements
    if(our_condition){
      console.log(`\n Sorry ${new_one_User} is already taken!`);
    }else{
        console.log (`\n This Username ${new_one_User} is available.`);
    }
})