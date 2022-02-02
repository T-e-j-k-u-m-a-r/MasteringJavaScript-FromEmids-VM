//Call back function demo

function funcA(cb) {
    setTimeout(() => {
        console.log('Function A');
        cb();
    }, 5000);

}

let f2 = function funcB() {
    console.log('Function B');
}

funcA(f2)
