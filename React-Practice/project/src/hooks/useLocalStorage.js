import React, { useState } from 'react'

function useLocalStorage(key,initialValue) {
  const[value,setValue]=useState(()=>{
    const saved=localStorage.getItem(key)
    
    return saved? JSON.parse(saved) :initialValue

  })
  const setStoredValue=(newvalue)=>{
    setValue(newvalue)
    localStorage.setItem(key,JSON.stringify(newvalue))
  }
  return [value,setStoredValue]
 
}

export default useLocalStorage