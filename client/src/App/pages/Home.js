import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import RegisterForm from '../components/RegisterForm'
import { UserContext } from '../components/UserProvider'


const Home = () => {
    const { user } = useContext(UserContext)
    const isLoggedIn = user != null
    return (
        <div>
            <h1>Chat.io</h1>
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