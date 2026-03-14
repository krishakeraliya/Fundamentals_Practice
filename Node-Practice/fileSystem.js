const fs=require("fs")
fs.mkdir('myFolder',(err)=>{
  if(err){
    console.log(err)
    return
  }
  console.log("folder sucess")
})
const data={
  name:"krisha",
  age:22,
  city:"surat"

}
fs.writeFile('data.json',JSON.stringify(data),(err)=>{
  if(err){
    console.log(err)
    return

  }
  fs.readFile('data.json',(err,data)=>{
    if(err){
      console.log(err)
      return
    }
    console.log(JSON.parse(data))
  })
})