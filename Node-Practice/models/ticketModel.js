const mongoose=require('mongoose')
const Schema=mongoose.Schema
const ticketSchema=new Schema({
  title:{
    type:String,
    required:true
  },
  status:{
    type:String,
    default:"open"
  },
  priority:{
    type:String,
    default:"low"
  },
  createdBy:{
    type:mongoose.Schema.Types.ObjectId, //user id
    ref:'User', //user model se link
    required:true
  }
})
module.exports=mongoose.model('Ticket',ticketSchema)