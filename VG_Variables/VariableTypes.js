//Function scope
var a1 = 10;

if (true) {
    //Block scope
    let a1 = 20;
    console.log(`a1 = ` + a1);

}

console.log(`a1 = ${a1}`);

