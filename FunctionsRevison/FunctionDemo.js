//Function Demo
//Definition: 

//Types of defining functions in JS: 


//Type 1 - Function Declaration
function payBill() {
    return 'The bill is paid'
}
console.log(payBill());

//Type 2 - Function Expression
let billPaidStatus = function payBill() {
    return 'The bill is paid'
}
console.log(billPaidStatus());

//Function which accepts arguments

let result1 = function greet(name) {
    console.log(`Hey Everyone, ${name} here...`);

}
result1('Tejkumar')


