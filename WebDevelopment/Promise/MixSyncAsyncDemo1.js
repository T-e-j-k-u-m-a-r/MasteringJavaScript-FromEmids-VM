/** 
 * Example for mix of synchronous & asynchronous code in JavaScript
 * */

let a1 = 10;

function f1(cb) {
    setTimeout(() => {
        console.log('Function 1');
        cb()
    }, 5000);
}

let f2 = function () {
    console.log('Function 2');
}

f1(f2)

console.log(a1);