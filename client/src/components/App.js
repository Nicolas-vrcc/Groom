import React from 'react'
import { Route, Switch } from 'react-router-dom'
import '../styles/App.css'
import Home from '../pages/Home'
import UserProvider from './UserProvider'

const App = () => {
    return (
        <UserProvider>
            <Switch>
                <Route exact path='/' component={Home} />
            </Switch>
        </UserProvider>
    )
}

export default App