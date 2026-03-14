require('dotenv').config()
const express=require('express')
const app=express()
app.use(express.json())
const connectDB=require('./config/db')
const ticketRoutes=require('./routes/ticketRoutes')
const userRoutes=require('./routes/userRoutes')
const {authMiddleware}=require('./middleware/authMiddleware')
const roleMiddleware=require('./middleware/roleMiddleware')
const errorMiddleware=require('./middleware/errorMiddleware')
const commentRoutes = require('./routes/commentRoutes')
const cors=require('cors')
app.use('/tickets',ticketRoutes)

app.get('/protected',authMiddleware,(req,res)=>{
  res.send("this is a protected route")
})
app.use('/auth',userRoutes)
app.get('/agent-only',authMiddleware,roleMiddleware('agent'),(req,res)=>{
  res.json({message:"Agent only route!"})
})
app.use('/tickets', commentRoutes)
app.use(cors())
app.use(errorMiddleware)

connectDB()
app.listen(process.env.PORT,()=>{
  console.log(`server is running on ${process.env.PORT} port`)
})