//Loops are used for recursive activity

//Types of loops are

/***
 * TODO:
 * 1. For
 * 2. while
 * 3. Do while
 * 4. For In
 * 5. For of
 */

let arr1 = [5, 4, 3, 2, 1]
//console.table(arr1);

// console.log("Using for each loop...");
// for (let i = 0; i < arr1.length; i++) {
//     console.log(arr1[i]);
// }

// console.log("---------------");
// //using foreach loops
// arr1.forEach(element => {
//     console.log(element);
// });

// console.log("---------------");
// console.log("using for of loop");
// for (const ele of arr1) {
//     console.log(ele);
// }

//While loop
console.log("-----------------While loop--------------------");
console.log(arr1);
let i = 0
while (i <= arr1.length) {
    arr1[i]
    i++
}

//Do While
console.log("-----------------Do While loop--------------------");
let j = 0
do {
    console.log(arr1[j]);
    j++
} while (j <= arr1.length);

//Array sorting & reverse
arr1.sort()

console.log(arr1);
arr1.reverse()
console.log(arr1);

// let result1 = arr1.includes(40)
// console.log(result1);

//TODO: Find method is applicable for Objects


//reduce
//filter
//map

let result1 = arr1.reduce(function (acc, pv, index) {
    return acc * pv
})

console.log(result1);

let result2 = arr1.filter(function (val, index) {
    return val <= 3
})

console.log(result2);


let result3 = arr1.map(function (ele) {
    return ele + 1
})

console.log(result3);

/**
 * map -> Transformation for entire array with some changes to all elements returns an array
 * filter -> returns a filtered array matching the conditions in the call back function
 * reduce -> returns a single value from the w.r.t logic set in the call back function
 */
