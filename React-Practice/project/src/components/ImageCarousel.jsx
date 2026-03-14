import React, { useEffect, useRef, useState } from 'react'

function ImageCarousel() {
  const[currentIndex,setCurrentIndex]=useState(0)
  const intervalRef=useRef(null)
  
  const images=[
  "https://picsum.photos/id/1/600/300",
  "https://picsum.photos/id/2/600/300",
  "https://picsum.photos/id/3/600/300",
  "https://picsum.photos/id/4/600/300",
  "https://picsum.photos/id/5/600/300",
  ]

  const stopAutoplay=()=>{
    clearInterval(intervalRef.current)
  }
  const startAutoplay=()=>{
    intervalRef.current=setInterval(() => {
      setCurrentIndex(prev=>(prev+1)%images.length)
    }, 2000);
  }
    useEffect(()=>{
 startAutoplay()
 return ()=>stopAutoplay()

  },[])
  return (
  <>
  <div onMouseEnter={stopAutoplay} onMouseLeave={startAutoplay}>

<img src={images[currentIndex]} alt='carousel'/>
  <button onClick={()=>setCurrentIndex((currentIndex-1+images.length)%images.length)}>Previous</button>
  <button onClick={()=>setCurrentIndex((currentIndex+1)%images.length)}>Next</button>
  </div>
  
  </>
  )
}

export default ImageCarousel