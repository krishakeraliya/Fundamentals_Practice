import { useEffect, useState } from "react"
import useDebounce from "../hooks/useDebounce"

function SearchUsers() {
  const[query, setQuery]=useState("")
  const[users,setUsers]=useState([])
 

  const debouncedQuery=useDebounce(query,1000)
    console.log(debouncedQuery)
   
  useEffect(()=>{
     if(!debouncedQuery){
      setUsers([])
      return
    }
fetch("https://jsonplaceholder.typicode.com/users")
.then(res=>res.json())
.then(data=>{
  const filtered=data.filter(user=>user.name.toLowerCase().includes(debouncedQuery.toLocaleLowerCase()))
  setUsers(filtered)
})

  },[debouncedQuery])
  
 
  return (
<>
<input
placeholder='Enter a anything....'
value={query}
onChange={(e)=>setQuery(e.target.value)}
/>
 {debouncedQuery && users.length===0 && (
  <div>No result found</div>
 )}
 {users.map(user=>(
  
  <div key={user.id}>{user.name}</div>
 ))}

</>
  )
}

export default SearchUsers