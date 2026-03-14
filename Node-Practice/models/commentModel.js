const mongoose=require('mongoose')
const Schema=mongoose.Schema
const commentSchema=new Schema({
  message:{
    type:String,
    required:true
  },
  ticket:{
    type:mongoose.Schema.Types.ObjectId,
    ref:'Ticket'
  },
  author:{
    type:mongoose.Schema.Types.ObjectId,
    ref:'User'
  }
},{timestamps:true})

module.exports=mongoose.model('Comment',commentSchema)