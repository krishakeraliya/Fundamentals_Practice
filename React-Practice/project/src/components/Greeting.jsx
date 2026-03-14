import React from 'react'

function Greeting({name}) {
  const isUser=name && name.trim()!==""
  return (
   <>
   <h1>Hello {isUser?name:"Guest"}</h1>
   {isUser?<p>Welcome back!</p>:<p>Please login</p>}
   </>
  )
}

export default Greeting