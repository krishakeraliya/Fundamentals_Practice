import React, { useState } from 'react'

function AuthUI() {
  const[isLoggedIn,setIsLoggedIn]=useState(false)
  return (
  <>
 {!isLoggedIn && (
  <>
  <p>Please login to continue</p>
  <button onClick={()=>setIsLoggedIn(true)}>Login</button>
  </>
 )}
 {isLoggedIn && (
  <>
<p>Welcome back krisha!</p>
<button onClick={()=>setIsLoggedIn(false)}>Logout</button>
  </>
 )}
  </>
  )
}

export default AuthUI