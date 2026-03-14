// console.log("hello world")
// console.log(process.argv.slice(2))
// const name=process.argv[2]
// console.log(`hello ${name}!`)
// console.log(process.env.NAME)
// console.log(process.env.PORT)
require('dotenv').config()
const http=require('http')

const server=http.createServer((req,res)=>{
  res.writeHead(200,{'Content-Type':'text/plain'})
  res.end("hello world")
})
server.listen(process.env.PORT,()=>{
  console.log("server is running....")
})

//task 5
const os=require("os")
console.log(os.platform())
console.log(os.totalmem())
console.log(os.freemem())
console.log(os.hostname())

//file read
const fs=require("fs")
fs.readFile('data.txt','utf8',(err,data)=>{
  
  if(err){
    console.log(err)
    return
  }
  console.log(data)
})
fs.writeFile('output.txt',"hello from krisha!",(err)=>{
  if(err){
    console.log(err)
    return
  }
  console.log("sucess!")
})
fs.copyFile('data.txt','copy.txt',(err)=>{
  if(err){
    console.log(err)
    return
  }
  console.log("sucessfully copied!")
})
fs.readdir('.',(err,data)=>{
  if(err){
    console.log(err)
    return
  }
  console.log(data)
})
const {add,subtract,multiply}=require('./mathHelper')
console.log(add(2,3))
console.log(subtract(5,4))
console.log(multiply(2,3))