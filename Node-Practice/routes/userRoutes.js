const express=require('express')
const router=express.Router()
const {body,validationResult}=require('express-validator')
const{register,login,forgotPassword,resetPassword}=require('../controllers/userController')

router.post('/register',[
  body('name').notEmpty().withMessage('Name required!'),
  body('email').isEmail().withMessage('Valid email insert'),
  body('password').isLength({min:6}).withMessage('password 6 characters must')
],(req,res,next)=>{
  const errors=validationResult(req)
  if(!errors.isEmpty()){
    return res.status(400).json({errors:errors.array()})
  }
  next()
}
  
  
  ,register)
router.post('/login',[
  body('email').isEmail().withMessage('valid email insert'),
  body('password').isLength({min:6}).withMessage('password 6 character long')
],(req,res,next)=>{
  const errors=validationResult(req)
  if(!errors.isEmpty()){
    return res.status(400).json({errors:errors.array()})
  }
  next()
}
  
  
  ,login)
router.post('/forgot-password',forgotPassword)
router.post('/reset-password',resetPassword)

module.exports=router