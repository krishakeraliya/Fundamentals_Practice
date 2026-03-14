import React, { useState } from 'react'

function Accordion() {
  const[toggle,setToggle]=useState(false)
  return (
  
  <>
  <p>what is React</p>
  <button onClick={()=>setToggle(prev=>!prev)}>{toggle?"Hide":"Show"}</button>
  {toggle && <p>React is a Js library for building UI.</p>}
  
  </>
  )
}

export default Accordion