import React, { useEffect, useState, useContext } from 'react'
// import { Route, Switch } from 'react-router-dom'
import { UserContext } from '../components/UserProvider'
import '../styles/App.css'
import Home from '../components/Home'
import Landing from './Landing'

async function fetchUser(setUser, setLoading) {
    const response = await fetch(
        `${process.env.REACT_APP_API_URL}/user`,
        { credentials: 'include' }
    )
    if (response.ok) {
        const userResponse = await response.json()
        setUser(userResponse.user)
    }
    setLoading(false)
}

const App = () => {
    const { user, setUser } = useContext(UserContext)
    const [loading, setLoading] = useState(true)
    useEffect(() => {
        // Set page title on first render
        document.title = 'Groom - Open chat rooms'
        // Fetch user on first render
        fetchUser(setUser, setLoading)
    }, [])
    // Access user from logged in
    const isLoggedIn = user != null
    if (loading) return <p>Loading...</p>
    return isLoggedIn ? <Home /> : <Landing />
}

export default App