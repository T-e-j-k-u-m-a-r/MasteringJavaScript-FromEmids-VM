/**
 * Variables declared using var are having whole function scope/file scope 
 * Variables declared using let are having block scope
 * Using var you can assign value to same variable twice,  
 * Whereas the same is not possible in case of let & const
*/

const a1 = 10
const a1 = 20;

console.log(a1)