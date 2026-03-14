import React, { useState } from 'react'

function StarRating() {
 const[rating,setRating]=useState(0)
 const stars=[1,2,3,4,5]
  return (
   <>
 {stars.map((star)=>(
  <span key={star} onClick={()=>setRating(star)}>
    {star<=rating?"★" : "☆"}

  </span>
 ))}
 <p>Rating:{rating}</p>
   </>
  )
}

export default StarRating