import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Sidebar from './Sidebar'
import Room from './Room'
import '../styles/Home.css'

const Home = () => {
    return (
        <div className="Home">
            <Sidebar />
            <Switch>
                <Route path="/room/:name" component={Room} />
                <Route component={() => <p>Select a room</p>} />
            </Switch>
        </div>
    )
}

export default Home