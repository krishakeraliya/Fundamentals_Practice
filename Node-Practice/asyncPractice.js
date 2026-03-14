const fs=require('fs')
const readFileCallback=(callback)=>{
  fs.readFile('data.txt','utf8',(err,data)=>{
    if(err) callback(err,null)
      else callback(null,data)
  })
}
const readFilePromise=()=>{
  return new Promise((resolve,reject)=>{
    fs.readFile('data.txt','utf8',(err,data)=>{
      if(err) reject(err)
        else resolve(data)
    })
  })
}
readFilePromise()
.then(data=>console.log(data))
.catch(err=>console.log(err))

const fetch=require('node-fetch')
const getMultipleData=async()=>{
  try {
    const user=await fetch('https://jsonplaceholder.typicode.com/users/1')
    .then(res=>res.json())
    const posts=await fetch(`https://jsonplaceholder.typicode.com/posts?userId=${user.id}`)
    .then(res=>res.json())
    console.log(user.name)
    console.log(posts.length)
  } catch (error) {
    console.log(error)
  }
}
getMultipleData()

const getData=async(url)=>{
  const res=await fetch(url)
  if(!res.ok){
    throw new Error('Http Error')
  }
  return res.json()
}
const getParallelData=async()=>{
  try {
    const[user,posts,todos]=await Promise.all([
      fetch('https://jsonplaceholder.typicode.com/users/1').then(res => res.json()),
      fetch('https://jsonplaceholder.typicode.com/posts?userId=1').then(res => res.json()),
      fetch('https://jsonplaceholder.typicode.com/todos?userId=1').then(res => res.json()),
    ])
    console.log(user.name)
    console.log(posts.length)
    console.log(todos.length)
  } catch (error) {
    console.log(error)
  }
}
getParallelData()