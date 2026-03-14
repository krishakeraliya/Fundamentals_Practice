import React, { useState} from 'react'

export default function Form() {
  const[name,setName]=useState("")
  const[submitted,setSubmitted]=useState(false)
  const handleSubmit=(e)=>{
    e.preventDefault()
    setSubmitted(true)
  }
  return (
  <>
  <form onSubmit={handleSubmit}>
    <input
  placeholder='Enter your name'
  value={name}
  onChange={(e)=>setName(e.target.value)}
  />
  <button type='submit'>Submit</button>
  
  </form>
  {submitted && !name && (
    <p>Please enter your name</p>
  )}
  {submitted && name && (
    <h2>Hello {name}</h2>
  )}
  </>
  )
}
