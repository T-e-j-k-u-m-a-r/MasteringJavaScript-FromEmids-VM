//Introduction to Arrays in Javascript

//Array Definition - Type 1
//Create an empty array
let arr1 = []

//Add array elements
arr1[0] = "Tejkumar"
arr1[1] = "Mangalore"
arr1[2] = "QA Architect"
arr1[3] = "HelthCare"
arr1[4] = "Bangalore"
arr1[5] = 1987

//Display the array elements
console.log(arr1)

//Check if arr1 is an array or not
console.log('Is arr1 an array ? :: ' + Array.isArray(arr1))

//Display array in string format
console.log(arr1.toString())

console.log("-------- * --------");


//Loops for array - For each
arr1.forEach(element => {
    if (element === "Tejkumar") {
        console.log('Array consists of ' + element + 'element in it...');
    }
    console.log(element)
});

console.log("-------- * --------");

//Array methods
arr1.push('NEW VALUE1')
console.log('Old Length :: ' + arr1.length);

console.log('New Length :: ' + arr1.push('NEW VALUE1'));

console.log("-------- * --------");
console.log(arr1);
console.log("-------- * --------");
arr1.pop()
console.log(arr1);
console.log("-------- * --------");

arr1.unshift('First Element')
console.log('New Length :: ' + arr1.length);
console.log("New Array :: " + arr1);


console.log("-------- * --------");
arr1.shift()
console.log("Updated Array :: " + arr1);
console.log('New Length :: ' + arr1.length);

console.log('Index of 1987 array element : ' + arr1.indexOf(1987));
console.log(arr1);
console.log('Reversed Array ::');
arr1.reverse()
console.log(arr1);

//Convert string into char array
const name = 'Tejkumar'

console.log(Array.from(name));

