import React from 'react'
import { render } from 'react-dom'
import { BrowserRouter as Router } from 'react-router-dom'
import { ClientSocket } from 'use-socketio'
import UserProvider from './components/UserProvider'

import './styles/index.css'
import App from './components/App'

console.log(process.env.REACT_APP_SOCKET_URL)

render((
    <Router>
        <ClientSocket url={process.env.REACT_APP_SOCKET_URL}>
            <UserProvider>
                <App/>
            </UserProvider>
        </ClientSocket>
    </Router>
), document.getElementById('root'))
