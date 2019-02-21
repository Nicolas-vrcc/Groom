import React, { useState, createContext } from 'react'

const UserContext = createContext()

const UserProvider = ({ children }) => {
  // TODO: fetch user from API
  const [user, setUser] = useState(null)
  const value = { user, setUser }
  return (
    <UserContext.Provider value={value}>
      {children}
    </UserContext.Provider>
  )
}

export { UserContext }
export default UserProvider