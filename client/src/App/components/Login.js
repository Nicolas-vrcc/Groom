import React, { useState, useContext } from 'react'
import { UserContext } from './UserProvider';

const Login = () => {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [loading, setLoading] = useState(false)
    const { setUser } = useContext(UserContext)

    const handleSubmit = async (e) => {
        e.preventDefault()
        setLoading(true)
        // posts user to database
        const response = await fetch('/user/login', {
            method: 'POST',
            credentials: 'include',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ username, password })
        })
        setLoading(false)
        if (response.ok) {
            const userResponse = await response.json()
            setUser(userResponse.user)
        }
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