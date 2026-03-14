// Functions 
// 1. Create function declarations and expressions 
function greet(){
  console.log("hello")
}
const greet=function(){
  console.log("hello")
}
// 2. Write arrow functions 
const greet=()=>{
  console.log("hello")
}
// 3. Implement functions with default parameters 
function greeting(greet="hello"){
  console.log(greet)
}
// 4. Use rest parameters in functions 
const add=function(...numbers){
  console.log(numbers)
}
add(4,5,6,7)
// 5. Create recursive functions (factorial, fibonacci)
function factorial(n){
 if(n===0){
  return 1
 }
 return n*factorial(n-1)
} 
function fibonacci(n){
  if(n<=1){
    return n
  }
  return fibonacci(n-1)+fibonacci(n-2)
}
// 6. Demonstrate closures
function outer(){
  let count=0
  function inner(){
    count++
    console.log(count)
  }
  return inner
} 
const counter=outer()
counter()
// 7. Write higher-order functions 
function higher(a,b,callback){
  return callback(a,b)
}
function add(x,y){
  return x+y
}
higher(5,6,add)
// 8. Create callback functions
//function pass as an argument to another function like
function geets(callback){

} 
// 9. Implement IIFE
(function(){
  console.log("immidiate execute")
})()