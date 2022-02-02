// document.write(`
// <h1>Hey Everyone, I'm from script.js file embedded inside .html file</h1>
// `)


console.log(b1);
console.log(greet);
greet();

var b1 = 10

function greet() {
    console.log("Hey Everyone, We are talking about Memory Hoisting in JavaScript");
}

function alertMessage() {
    window.alert('Thanks for registering..!');
}

function subscribeForNewsletter() {
    window.prompt('Enter your email id to subscribe for newsletter...!')
}

function login() {
    window.alert('Login successful..')
}

function a1() {
    //window.alert('You have clicked it successfully...!');
    document.getElementById('span1').innerText = 'You have clicked on Click me! button'
}