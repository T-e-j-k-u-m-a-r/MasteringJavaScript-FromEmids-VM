const { Subject, name, topicName } = require('./One.js')

//Print the variable
console.log(`name :: ${name}`);

//Perform method call
topicName('Modules in JavaScript')

//Crete object and invoke method call
const sub = new Subject('Modules in JS')
console.log(sub.getSubjectName())