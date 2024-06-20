"use strict";
// Describe a function
function discribe_city(city, country = "Pakistan") {
    console.log(`${city} is in ${country}`);
}
// calling the function
discribe_city("karachi");
discribe_city("Lahore");
discribe_city("Berlin", "Germany");
