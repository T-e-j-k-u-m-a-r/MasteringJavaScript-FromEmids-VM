let arr1 = ["Maruthi", "Honda", "Tata", "VW", "BMW", "Hyundai"]
let arr2 = [1, 2, 3, 4]

//Slice & Splice method
//Reduce, Filter & Map
//Find, From

let result1 = arr1.filter(function (val, index) {
    return val.length < 5
})

console.log(result1);

let result2 = arr2.reduce(function (pv, cv, index) {
    return pv * cv
})

console.log(result2);

