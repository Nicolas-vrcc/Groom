import React from 'react'
import { render } from 'react-dom'
import { BrowserRouter as Router } from 'react-router-dom'
import UserProvider from './components/UserProvider'

import './styles/index.css'
import App from './components/App'

render((
    <Router>
        <UserProvider>
            <App/>
        </UserProvider>
    </Router>
), document.getElementById('root'))
