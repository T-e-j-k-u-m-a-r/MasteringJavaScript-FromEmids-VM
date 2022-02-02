const { Student, Singer } = require('./Student')

//Object creation
let s1 = new Student('Hrithik Roshan', 'LKG', "Dancer")
let s2 = new Student('Virat Kohli', 'UKG', "Cricketer")
let s3 = new Singer('Hindi', "Hip-Hop")

console.log(s1.getName());
console.log(s1.getStandard());
console.log(s1.getSkill());
console.log('----------------------');
console.log(s2.getName());
console.log(s2.getStandard());
console.log(s2.getSkill());
console.log('----------------------');
console.log(s3.singSong());