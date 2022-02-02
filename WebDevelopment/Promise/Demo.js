//Promise in JavaScript
//Every event which happens in Javascript is based on promise. 

/***
 * Only once the promise is completed, then we can work on its output
 * if a promise is resolved then resolve part will be picked up
 * if a promise is resolved then reject part will be picked up
 */

let p = new Promise(function (resolve, reject) {

    let a = 1;
    if (a === 1) {
        resolve('a is equal to 1')
    } else {
        reject('a is not equal to 1')
    }

})

p.then(function (restxt) {
    console.log(restxt);

}).catch(function (rejtxt) {
    console.log(rejtxt);
})