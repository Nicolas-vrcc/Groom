import React, { useState, useContext } from 'react'
import { UserContext } from './UserProvider';

const RegisterForm = () => {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [loading, setLoading] = useState(false)
    const { setUser } = useContext(UserContext)

    const handleSubmit = async (e) => {
        e.preventDefault()
        setLoading(true)
        // posts user to database
        await fetch('/user', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ username, password })
        })
        setLoading(false)
        setUser({ username })
    }

    return (
        <div>
            <p>Pick a username</p>
            <form onSubmit={handleSubmit}>
                <label>
                    Username
                    <input
                        type="text"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                    />
                </label>
                <label>
                    Password
                    <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </label>
                <input
                    type="submit"
                    disabled={loading}
                    value={loading ? 'Signing up...' : 'Sign up'}
                />
            </form>
        </div>
    )
}

export default RegisterForm;