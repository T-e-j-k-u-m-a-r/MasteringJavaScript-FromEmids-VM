//Call back functions
//The function which is passed as an argument to another function is called CBF

var f1 = function fOne(cb) {

    setTimeout(() => {

        console.log('Function 1');
        cb()

    }, 5000)
}

var f2 = function fTwo() {
    console.log('Function 2');

}

f1(f2)
