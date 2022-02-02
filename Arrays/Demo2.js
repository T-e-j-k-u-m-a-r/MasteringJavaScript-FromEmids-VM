//Array Methods - Length, Printing an array various types

let arr1 = ["Maruthi", "Honda", "Tata", "VW", "BMW", "Hyundai"]

//length of an array
//Index starts from 0, So length of an array is always > highest index + 1

console.log(arr1.length);

//Print the array
console.log(arr1);

//Print the array using from method
console.log(Array.from(arr1));

console.log('****----****');
//Print the array using generic for loop
for (let i = 0; i < arr1.length; i++) {
    console.log(arr1[i])
}
console.log('****----****');

//Print the array using for each loop
arr1.forEach(function (ele) {
    console.log(ele);
})

console.log('****----****');

//Print the array using forOf method
for (const ele of arr1) {
    console.log(ele);
}

console.log('****----****');
