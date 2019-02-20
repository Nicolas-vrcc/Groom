import React, { useState, useContext } from 'react'
import { UserContext } from './UserProvider'
import { deleteCookie } from '../../services/cookies';

const Logout = () => {
  const { setUser } = useContext(UserContext)
  const [loading, setLoading] = useState(false)

    const handleLogout = async (e) => {
        e.preventDefault()
        setLoading(true)
        // posts user to database
        const response = await fetch('/user/logout', {
            method: 'POST',
            credentials: 'include',
        })
        setLoading(false)
        if (response.ok) {
            // Delete user from context
            setUser(null)
            // Delete JWT cookie
            deleteCookie('groom-token')
        }
    }
  return (
    <button
        onClick={handleLogout}
        disabled={loading}
    >
        {loading ? 'Loging out....' : 'Logout'}
    </button>
  )
}

export default Logout