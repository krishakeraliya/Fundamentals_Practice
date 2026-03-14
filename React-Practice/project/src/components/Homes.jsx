import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

function Homes() {
  const[city,setCity]=useState("")
  const navigate=useNavigate()
  return (
   <>
   <input
   placeholder='Enter a city'
   value={city}
   onChange={(e)=>setCity(e.target.value)}
   />
   <button onClick={()=>navigate(`/weather/${city}`)}>Search</button>
   </>
  )
}

export default Homes