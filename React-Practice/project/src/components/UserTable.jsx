import React, { useEffect, useState } from 'react'

function UserTable() {
  const[users,setUsers]=useState([])
  const[loading,setLoading]=useState(true)
  const[error,setError]=useState(null)
 useEffect(()=>{
  fetch("https://jsonplaceholder.typicode.com/users")
  .then(res=>res.json())
  .then(data=>
    
  {
    console.log(data)
    setUsers(data)
    setLoading(false)
  }
  )
  .catch(err=>{
    setError("data is not loaded")
    setLoading(false)
  })
 },[])
 if(loading) return <div>Loading....</div>
 if(error) return <div>{error}</div>
  return (
   <>
   <table>
    <thead>
      <tr>
        <th>Name</th>
        <th>Username</th>
        <th>Email</th>
        <th>Phone</th>
        <th>City</th>
      </tr>
    </thead>
    <tbody>
      {users.map(user=>(
        <tr key={user.id}>
          <td>{user.name}</td>
          <td>{user.username}</td>
          <td>{user.email}</td>
          <td>{user.phone}</td>
          <td>{user.address.city}</td>
        </tr>
      ))}
    </tbody>
   </table>
   </>
  )
}

export default UserTable