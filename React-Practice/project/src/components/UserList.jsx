import React from 'react'

export default function UserList() {
  
const users = [
 {id:1,name:"Krisha"},
 {id:2,name:"Rahul"},
 {id:3,name:"Amit"},
 {id:4,name:"Neha"}
]
  
  return (
<ul>
  {users.map((user)=>(
    <li key={user.id}>{user.name}-{user.id}</li>
  ))}
</ul>
  )
}
