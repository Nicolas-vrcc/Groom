import React, { useContext, useEffect, useState } from 'react'
import Signup from '../components/Signup'
import Login from '../components/Login'
import { UserContext } from '../components/UserProvider'
import Logout from '../components/Logout';

async function getUser(setUser, setLoading) {
    const response = await fetch('/user', { credentials: 'include' })
    if (response.ok) {
        const userResponse = await response.json()
        setUser(userResponse.user)
    }
    setLoading(false)
}

const Home = () => {
    const { user, setUser } = useContext(UserContext)
    const [loading, setLoading] = useState(true)
    useEffect(() => {
        // Set page title on first render
        document.title = 'Groom - Open chat rooms'
        // Fetch user on first render
        getUser(setUser, setLoading)
    }, [])
    // Access user from logged in
    const isLoggedIn = user != null
    if (loading) return <p>Loading...</p>
    return (
        <div>
            <h1>Groom - Open chat rooms</h1>
            {isLoggedIn ?
                <div>
                    <h2>Hello {user.username}</h2>
                    <Logout />
                </div>
                :
                <div>
                    <Signup />
                    <Login />
                </div>
            }
        </div>
    )
}

export default Home