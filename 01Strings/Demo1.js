//String in JavaScript

let city = "Mangalore City Corporation is awarded as 2nd cleanest city in India, is great!"
console.log(`name :: ${city}`);

/**
 * 1. String can be created in primitive way and reference way 
 */

let name = new String("JavaScript EC5 module for Programming")
console.log(`name :: ${name}`);

console.log((typeof (name)));
console.log((typeof (city)));


//String methods
//Note: String create in the object way only will have access to String
//Inbuilt methods

//includes
console.log("Does the string include a text (awarded) :: " + city.includes('awarded'));

//indexOf
console.log('Index of string is : ' + city.indexOf('is'));

//lastIndexOf
console.log('Last index of is : ' + city.lastIndexOf('is'));

//split
console.log('Split value of city ::  ' + city.split(" "));

//length
console.log(('Length of city variable :: ' + city.length));




