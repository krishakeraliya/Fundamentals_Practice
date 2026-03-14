const bcrypt=require('bcryptjs')
const jwt=require('jsonwebtoken')
const User=require('../models/userModel')
exports.register=async (req,res,next)=>{
  try {
    const{name,email,password,role}=req.body
  const hashedPassword=await bcrypt.hash(password,10)
  const user=await User.create({name,email,password:hashedPassword,role})
  
  res.json("user created sucessfully!!")
  } catch (error) {
    next(error)
  }
}
exports.login=async (req,res,next)=>{
try {
    const {email,password}=req.body
  const user=await User.findOne({email})
  if(!user){
   return  res.status(404).json({message:"user not found"})
  }
  const comparePassword=await bcrypt.compare(password,user.password)
  if(!comparePassword){
   return  res.status(404).json({message:"Invalid password"})
  }
 const token=jwt.sign(
  {id:user._id ,role:user.role}, //payload
  process.env.JWT_SECRET, //secret key
  {expiresIn:'1d'}
 )
 res.json({token})
} catch (error) {
  next(error)
}
}
exports.forgotPassword=async (req,res,next)=>{
  try {
    const {email}=req.body
    const user=await User.findOne({email})
    if(!user){
      return res.status(404).json("user not found")
    }
    const resettoken=jwt.sign(
      {id:user._id},
      process.env.JWT_SECRET,
      {expiresIn:'15m'}
    )
    res.json({resettoken})
  } catch (error) {
    next(error)
  }
}
exports.resetPassword=async (req,res,next)=>{
  try{
   const{token,newPassword}=req.body
  const decoded=jwt.verify(token,process.env.JWT_SECRET)
  const hashedPassword=await bcrypt.hash(newPassword,10)
  await User.findByIdAndUpdate(decoded.id,{password:hashedPassword})
  res.json({message:"Password reset successfully"})
  }catch(error){
   next(error)
  }

}