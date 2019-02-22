import React, { useState, useContext } from 'react'
import { UserContext } from './UserProvider';

const Login = () => {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)
    const { setUser } = useContext(UserContext)

    const handleSubmit = async (e) => {
        e.preventDefault()
        setLoading(true)
        // Save user to database
        const response = await fetch(`${process.env.REACT_APP_API_URL}/user/login`, {
            method: 'POST',
            credentials: 'include',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ username, password })
        })
        const userResponse = await response.json()
        if (response.ok) {
            setUser(userResponse.user)
        } else {
            setError(userResponse.message)
        }
        setLoading(false)
    }

    return (
        <div>
            <h2>Login if you have an account</h2>
            <form onSubmit={handleSubmit}>
                <label>
                    Username
                    <input
                        type="text"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                    />
                </label>
                <br />
                <label>
                    Password
                    <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </label>
                <br />
                {error ? <p>Error: {error}</p> : null}
                <input
                    type="submit"
                    disabled={loading}
                    value={loading ? 'Loging in...' : 'Login'}
                />
            </form>
        </div>
    )
}

export default Login