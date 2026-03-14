import React, { useEffect, useRef, useState } from 'react'

function InfiniteScroll() {
  const[posts,setPosts]=useState([])
  const[page,setPage]=useState(1)
  const[loading,setLoading]=useState(true)
  const[hasMore,sethasMore]=useState(true)
  const loaderRef=useRef(null)
  useEffect(()=>{
try {
  fetch(`https://jsonplaceholder.typicode.com/posts?_page=${page}&_limit=10`)
  .then(res=>res.json())
  .then(data=>{
    console.log(data)
    setPosts(prev=>[...prev,...data])
   
    if(data.length<10){
      sethasMore(false)
     
    }
     setLoading(false)
  })
  
} catch (error) {
  console.log(error)
}
  },[page])
  useEffect(()=>{
    if(!loaderRef.current) return
    const observer=new IntersectionObserver((entries)=>{
    if(entries[0].isIntersecting){
      if(hasMore){
          setPage(prev=>prev+1)
      }
    
    }
  })
  observer.observe(loaderRef.current)
  return ()=> observer.disconnect()
  },[hasMore])

  
  return (
    <>
    <h1>Infinite Scorll</h1>
    {posts.map((post)=>(
      <div key={post.id}>
        <p>{post.id}</p>
       <p>{post.title}</p>
      </div>
    ))}
    <div ref={loaderRef}>
{hasMore ? <p>Loading more...</p> : <p>Sab load ho gaya! 🎉</p>}
    </div>
    </>
  )
}

export default InfiniteScroll