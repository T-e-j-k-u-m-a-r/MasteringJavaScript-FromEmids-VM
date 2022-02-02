//define 1st function
let f1 = function first(cb) {

    setTimeout(() => {

        console.log('This is first function...')
        cb()
    }, 5000);



}
//define 2nd function
let f2 = function second() {
    console.log('This is second function...')
}

f1(f2)


