// Error Handling and Testing 
// 1. Use try-catch-finally blocks 
function divide(a,b){
 
 if(b===0){
  throw new Error("Cannot divide by zero")
 }
 let result=a/b
 console.log(result)

}
try {
  divide(5,6)
} catch (error) {
  console.log(error.message)
}finally{
  console.log("operation finished")
}
// 2. Create custom error classes 
class ValidationError extends Error{
  constructor(message){
    super(message)
    this.name="validation error"
  }
}
function checkAge(age){
  if(age<18){
    throw new ValidationError("age must be at least 18")
  }
}
try{
  checkAge(16)
}catch(error){
  console.log(error.message)
}
// 3. Handle async errors 
async function fetchUser(){
try {
    const response=await fetch("https://jsonplaceholder.typicode.com/users")
    if(!response.ok){
      throw new Error("failed to fetch users")
    }
  const data=await response.json()
  console.log(data)
} catch (error) {
  console.log(error.message)
}
}
// 4. Write unit tests 
function add(a,b){
  return a+b
}
function testAdd(){
  if(add(2,3)===5){
    console.log("test passed")
  }else{
    console.log("test failed")
  }
}
testAdd()
// 5. Mock functions and objects 
function sendEmail(){
  console.log("email sent sucessfully")
}

//error handling in js

//types of error:
//compile time error
//run time error

//compile time error
// console.log(1 //syntax error

//runtime error
console.log(x) //run karta error aavse

//custom error
class InsufficientBalanceError extends Error{
  constructor(message){
    super(message)
    this.name="InsufficientBalanceError"
  }
}
function withdraw(balance,amount){
  if(amount<=0){
    throw new Error("amount must be grater than zero")
  }
  if(amount>balance){
    throw new InsufficientBalanceError("not enough balanace")
  }
  return balance-amount
}
try {
  withdraw(1000,2000)
} catch (error) {
  if(error instanceof InsufficientBalanceError){
    console.error(error.message)
  }else{
    console.error(error.message)
  }
}
