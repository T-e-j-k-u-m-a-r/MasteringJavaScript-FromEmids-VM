/**
 * Array:
 *
 * Storing many values inside a single variable
 * and traversing them with the use of index is called an Array
 *
 * */



// //Array methods

// //length - property
// console.log('Array length of arr1 is : ' + arr1.length);

// //Traversing array - type 1
// arr1.forEach(function (ele, index) {
//     console.log(`The value of element on the index position ${index} is ${ele}`);
// })

// //Traversing array - type 2
// for (let i = 0; i < arr1.length; i++) {
//     console.log(arr1[i]);
// }

// //Slice - Chopping
// let sliceResult = arr2.slice(1, 3)
// console.log("sliceResult :: " + sliceResult); //"android", "blackberry"

// //Splice - Its for modifying an array

// // let arr1 = [8, 7, 1, 2, 4, 6, 0]
// // let arr2 = ["iphone", "android", "blackberry", "nokia", "windows"]

// console.log(arr1);

// let spliceResult = arr1.splice(1, 3)

// console.log("spliceResult :: " + spliceResult);
// console.log("arr1 :: " + arr1);

// //replace a value by another
// //let arr2 = ["iphone", "android", "blackberry", "nokia", "windows"]

// console.log(arr2.splice(arr2.length - 1, 1, 100));
// console.log(arr2);



let arr1 = [8, 7, 1, 2, 4, 6, 0]
let arr2 = ["iphone", "android", "blackberry", "nokia", "windows"]

//sort
//reverse
//shift
//unshift

console.log(`Sorted arr1 is :: ` + arr1.sort());
console.log(`Reverse Sorted arr1 is :: ` + arr1.reverse());

//Remove 1st element in an array
arr1.unshift('New Value')
console.log(arr1);

//Add an element to 0th position
arr1.shift()
console.log(arr1);

//push & pop
arr1.push(0)
arr1.push(0)
arr1.push(0)
arr1.push(100)
console.log(arr1);

arr1.pop()
console.log(arr1);

//indexOf & lastIndexOf
console.log("First Index of element (4) " + arr1.indexOf(0));
console.log("Last Index of element (4) " + arr1.lastIndexOf(0))

//fill, filter, reduce & map
//console.log(arr1.fill(10));
let filterResult = arr1.filter(function (ele) {
    return ele >= 7
})

console.log(" filterResult :: " + filterResult);

let reduceResult = arr1.reduce(function (acc, cv) {

    return acc + cv
}, 0)

console.log("reduceResult :: " + reduceResult);

let mapResult = arr1.map(function (ele) {
    return ele * 10
})

console.log("mapResult :: " + mapResult);

//some & every
let someResult = arr1.some(function (ele) {
    return ele > 300
})

console.log("someResult :: " + someResult);

let everyResult = arr1.every(function (ele) {
    return ele > -1
})


console.log("everyResult :: " + everyResult);




