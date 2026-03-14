// Asynchronous Programming  
// 1. Create and use Promises 
function checkNumber(number){

return new Promise((resolve,reject)=>{

  if(number%2===0){
    resolve("even number")
  }else{
    reject("odd number")
  }
})
}

checkNumber(4)
.then((res)=>console.log(res))
.catch((err)=>console.log(err))

// 2. Handle Promise rejections 
function loginUser(password){
return new Promise((resolve,reject)=>{
 
  if(password==='1234'){
    resolve("promise resolved!")
  }
  else{
    reject("promise rejected!")
  }
})
}

loginUser("1234")
.then((res)=>console.log(res))
.catch((err)=>console.log(err))

// 3. Use Promise.all() and Promise.race() 
const p1= new Promise((res)=>setTimeout(() => {
    res("resolved 1")
  }, 1000))
  const p2= new Promise((res)=>setTimeout(() => {
    res("resolved 2")
  }, 2000))
  const p3= new Promise((res)=>setTimeout(() => {
    res("resolved 3")
  }, 3000))
Promise.all([p1,p2,p3]).then((res)=>console.log(res))
Promise.race([p1,p2,p3]).then((res)=>console.log(res))
                        .catch((err)=>console.log(err))

// 4. Convert callbacks to Promises 
function getUserData(callback){
  setTimeout(() => {
    callback("user data")
  }, 1000);
}
function getUserData(){
  return new Promise((resolve)=>{
    setTimeout(() => {
      resolve("user data")
    }, 1000);
  })
}

// 5. Implement async/await 
async function getProduct(){
const result=await getUserData()
console.log(result)
}

// 6. Fetch data from APIs 
async function fetchApi(){
const response=await fetch('https://jsonplaceholder.typicode.com/posts')
const data=await response.json()
console.log(data[0].title)
}
               
// 7. Handle API errors
async function getData(){
try {
  const response=await fetch('https://jsonplaceholder.typicode.com/posts')
const data=await response.json()
console.log(data[0].title)
} catch (error) {
  console.log(error)
}
}

//practice task 1
function fetchUser(){
  return new Promise((resolve)=>{
    setTimeout(() => {
    resolve("user data loaded")
    },2000);
  })
}
fetchUser()
.then(res=>console.log(res))

//practice task 2 
function getProducts(){
  return new Promise((resolve)=>{
    resolve("product item")
  })
}
async function getData(){
  const products=await getProducts()
  console.log(products)
}

//practice task 3
async function getname(){
 try {
   const response=await fetch("https://jsonplaceholder.typicode.com/users")
  const data=await response.json()
 data.forEach(user => {
  console.log(user.name)
 });
 } catch (error) {
  console.log(error)
 }
}