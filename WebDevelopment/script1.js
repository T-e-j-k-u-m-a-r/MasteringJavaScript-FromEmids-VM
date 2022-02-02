// var ele1 = document.createElement('h1')
// var ele1 = document.createElement('h2')
// var ele1 = document.createElement('h3')

// var txtNode1 = document.createTextNode('This is h1')
// var txtNode1 = document.createTextNode('This is h2')
// var txtNode1 = document.createTextNode('This is h3')

//console.log(module);

//Array Demo

//The same concept is used for data driven testing

//let arr1 = ["Tejkumar", "Jeevitha", "Atharv", "Shravya"]

let arr2 = [
    {
        name: "Tejkumar",
        city: "Mangalore"
    },
    {
        name: "Jeevitha",
        city: "Channapatna"
    },
    {
        name: "Shravya",
        city: "Bangalore"
    }
]

arr2.forEach(function (arr2ele, index) {
    console.log(`Index position ${index} :: name = ${arr2ele.name} :: city = ${arr2ele.city}`);
})


// arr1.forEach(function (ele, index) {
//     console.log(`element at index position ${index} is ${ele}`);
// })

