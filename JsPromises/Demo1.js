//Promises in JavaScript

/**
 * Promises in JavaScript are nothing but the objects which watch each event occurred in JavaScript
 * There are 3 states for an event
 * 1. Pending
 * 2. Success
 * 3. Failure
 * 
 * Depending on the outcome of any event, then output is passed on to then() method
 * 
 */

let p = new Promise(function (resolve, reject) {

    let a = 10
    if (a === 1) {
        resolve('A is equal to 1')

    } else {
        reject('A is not equal to 1')
    }
})

p.then(function (res) {
    console.log(res)

}).catch(function (err) {
    console.log(err)
})