import React from 'react'
import Sidebar from './Sidebar'
import Room from './Room'
import '../styles/Home.css'

const Home = () => {
    return (
        <div className="Home">
            <Sidebar />
            <Room />
        </div>
    )
}

export default Home