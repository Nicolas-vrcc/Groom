import React from 'react'
import Signup from "./Signup"
import Login from "./Login"

const Landing = () => {
  return (
    <div>
      <h1>Chatrooms for everyone</h1>
      <Signup />
      <Login />
    </div>
  )
}

export default Landing