let arr1 = ["Maruthi", "Honda", "Tata", "VW", "BMW", "Hyundai"]

//Slice & Splice method
//Reduce, Filter & Map

arr1.forEach(function (val, index) {
    console.log(`value at index position ${index} is ${val}`);

    if (val === 'BMW') {
        console.log(`${val} is present in the array`);
    }
})

//Check if certain element is present in an array or not

//filter -> filter an array and return the new array
const result = arr1.filter(function (val) {
    return val.startsWith('H')
})

console.log('Filtered result : ' + result);


