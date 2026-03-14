const Comment=require('../models/commentModel')
exports.addComment=async (req,res,next)=>{
try {
    const ticketId=req.params.ticketId
const  message=req.body.message
const author=req.user.id
const comment=await Comment.create({
  message,
  ticket:ticketId,
  author
})
res.status(201).json(comment)
} catch (error) {
  next(error)
}
}