//Call back function
//A function that is passed as an argument into another function is called CBF
//Important Note: Should use Function expression in case of Call back function

let f1 = function fA(cb) {

    //Add settimeout callback function

    setTimeout(() => {
        console.log(`This is fA function`);
        cb()
    }, 5000);

}

let f2 = function fB() {
    console.log(`This is fB function`);
}

f1(f2)
