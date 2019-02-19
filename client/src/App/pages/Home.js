import React, { useContext, useEffect } from 'react'
import { Link } from 'react-router-dom'
import RegisterForm from '../components/RegisterForm'
import { UserContext } from '../components/UserProvider'


const Home = () => {
    // Set page title on first render
    useEffect(() => {
        document.title = 'Groom - Open chat rooms'
    }, [])
    // Access user from logged in
    const { user } = useContext(UserContext)
    const isLoggedIn = user != null
    return (
        <div>
            <h1>Groom</h1>
            {isLoggedIn ?
                <div>
                    <h2>Hello {user.username}</h2>
                    <Link to="./list">
                        <button variant="raised">
                            My List
                        </button>
                    </Link>
                </div>
                :
                <RegisterForm />
            }
        </div>
    )
}

export default Home