import React from 'react'
import useLocalStorage from '../hooks/useLocalStorage'

function LocalStorageDemo() {
 const [name,setName]= useLocalStorage("name","krisha")

  return (
   <>
   <input
   placeholder='Type anything...'
   onChange={(e)=>setName(e.target.value)}
   />
   <p>{name}</p>
   </>
  )
}

export default LocalStorageDemo