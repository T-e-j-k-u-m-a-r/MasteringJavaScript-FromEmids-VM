//Function Declaration & Function Expression
//Type 1: Function Declaration with a function name
//Type 2: Function expression with function name

function greet1(name) {
    console.log(`name is ${name}`)
}

var greet2 = function whatsYourCity(city) {
    console.log(`cityName is ${city}`)
}

var greet3 = (season) => {
    console.log(`Season is : ${season}`)
}

greet1('Tejkumar')
greet2('Mangalore')
greet3('Rainy')

