let dateObj = new Date()

console.log(dateObj);
console.log(dateObj.toString());
console.log(dateObj.getDate());
console.log(dateObj.getDay());
console.log(dateObj.getMonth());
console.log(dateObj.getFullYear());
console.log(dateObj.getUTCMonth());

dateObj.setMonth(10)
console.log("Current Month : "+dateObj.getMonth());