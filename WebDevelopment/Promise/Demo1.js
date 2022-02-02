//Promise Demo:

const p = new Promise(function (resolve, reject) {

    let a = 1
    if (a == 1) {
        resolve('a equal to true')
    } else {
        reject('a not equal to true')
    }

})

p.then(function (resTxt) {
    console.log(resTxt);

}).catch(function (rejTxt) {
    console.log(rejTxt);
})