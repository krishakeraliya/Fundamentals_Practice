// let tickets=[]
// exports.getAllTickets=(req,res,next)=>{
//   res.json(tickets)
//   // const error=new Error("something went wrong")
//   // error.status=400
//   // next(error)
// }
// exports.getTicketById=(req,res)=>{
//  const ticket=tickets.find(t=>t.id===req.params.id)
//  if(!ticket) return res.status(404).json({message:"ticket not found"})
//   res.json(ticket)
// }
// exports.createTicket=(req,res)=>{
//   const newTicket={
//     id:Date.now().toString(),
//     title:req.body.title,
//     status:"open"
//   }
//   tickets.push(newTicket)
//   res.status(201).json(newTicket)
// }
// exports.updateTicket=(req,res)=>{
//  const index=tickets.findIndex(t=>t.id===req.params.id)
//  if(index===-1) return res.status(404).json({message:"not found"})
//   tickets[index]={...tickets[index],...req.body}
// res.json(tickets[index])
// }
// exports.deleteTicket=(req,res)=>{
//   tickets=tickets.filter(t=>t.id!==req.params.id)
//   res.json({message:"deleted!"})
// }
const Ticket=require('../models/ticketModel')
exports.getAllTickets=async (req,res,next)=>{
 try {
 
   const page=parseInt(req.query.page)||1
   const limit=parseInt(req.query.limit)||10
   const skip=(page-1)*limit
   const tickets=await Ticket.find().skip(skip).limit(limit)
   const total=await Ticket.countDocuments()
   res.json({
    tickets,
    total,
    page,
    totalPages:Math.ceil(total/limit)
   })
 } catch (error) {
  next(error)
 }
}
exports.getTicketById=async (req,res,next)=>{
 try {
  const ticket=await Ticket.findById(req.params.id)
  res.json(ticket)
 } catch (error) {
  next(error)
 }
}
exports.createTicket=async (req,res,next)=>{
 try {
  const  ticket=await Ticket.create(req.body)
  res.status(201).json(ticket)
 } catch (error) {
  next(error)
 }
}
exports.updateTicket=async (req,res,next)=>{
 try {
  const update=await Ticket.findByIdAndUpdate(req.params.id,req.body,{new:true})
  res.json(update)
 } catch (error) {
  next(error)
 }
}
exports.deleteTicket=async (req,res,next)=>{
  try {
     await Ticket.findByIdAndDelete(req.params.id)
    res.json({message:"ticket deleted successfully!"})
  } catch (error) {
    next(error)
  }
}