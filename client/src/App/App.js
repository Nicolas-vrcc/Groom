import React from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import List from './pages/List';
import UserProvider from './components/UserProvider'

const App = () => {
    return (
        <UserProvider>
            <Switch>
                <Route exact path='/' component={Home} />
                <Route path='/list' component={List} />
            </Switch>
        </UserProvider>
    )
}

export default App;