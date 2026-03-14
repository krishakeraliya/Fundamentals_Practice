require('dotenv').config()
const http=require("http")
const server=http.createServer((req,res)=>{

if(req.method === 'GET' && req.url === '/') {
  res.end("GET - Home page")
} else if(req.method === 'POST' && req.url === '/') {
  res.end("POST - Home page")
} else if(req.method === 'GET' && req.url === '/about') {
  res.end("GET - About page")
} else {
  res.end("404 Not Found!")
}

})
server.listen(process.env.PORT,()=>{
  console.log(`server running on ${process.env.PORT} port`)
})