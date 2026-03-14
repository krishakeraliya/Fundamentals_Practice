import React, { useEffect, useState } from 'react'

function UsersPagination() {
  const[posts,setPosts]=useState([])
  const[currentPage,setCurrentPage]=useState(1)
  const[loading,setLoding]=useState(true)
  const postsPerPage=10
  useEffect(()=>{
   fetch("https://jsonplaceholder.typicode.com/posts")
   .then(res=>res.json())
   .then(data=>{
    console.log(data)
    setPosts(data)
     setLoding(false)
   })
  
  },[])
  const lastIndex=currentPage*postsPerPage
  const firstIndex=lastIndex-postsPerPage
  const currentPosts=posts.slice(firstIndex,lastIndex)
  
  console.log(currentPosts)
  const totalPages=Math.ceil(posts.length/postsPerPage)
  if(loading) return <p>Loading....</p>
  return (
  <>
  <h1>Pagination</h1>
 {currentPosts.map(curr=>(
   <div key={curr.id}>
    <p>{curr.id}</p>
    <p>{curr.title}</p>
    <p>{curr.body}</p>
   </div>
 ))}
 <button disabled={currentPage===1} onClick={()=>setCurrentPage(currentPage-1)}>Previous</button>
 <span>{currentPage}/{totalPages}</span>
 <button disabled={currentPage===totalPages} onClick={()=>setCurrentPage(currentPage+1)}>Next</button>
  </>
  )
}

export default UsersPagination