// Variables and Data Types  
// 1. Declare variables using var, let, and const and explain the differences
var a=10;
let b=20;
const c=30; 
// 2. Check the data type of different variables
//string,number,boolean,null,undefined,bigInt,symbol 
// 3. Convert string to number and number to string 
let d=Number("10")
let e=String(10) //this is a type conversion 
// 4. Demonstrate type coercion with examples 
//it happend when operator is dealing with two values that have different types in that case js behined the scence convert one value to match other value so end operator can executed
// Type coercion = JavaScript automatically converts types when different types are used in operations
console.log('i am'+21+'years old')
let n='1'+1
n=n-1
console.log(n)

// 5. Show the difference between null and undefined 
//null me value null hoi undefined ma value defined no hoi...