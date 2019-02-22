/*
Imports
*/
const express = require('express')
const messageRouter = express.Router({ mergeParams: true })
const { sendMessage } = require('./message.controller')

/*
Routes definition
*/
class MessageRouterClass {
    constructor({ passport }) {
        this.passport = passport
    }
    routes() {
        // Send message
        messageRouter.post('/', (req, res) => {
            const { content, room } = req.body
            const { username } = req.user
            const date = Date.now()
            // Send message via socket
            req.io.sendMessage(content, room, date, username)
            sendMessage(content, room, username)
                .then((data) => res.json({ message: 'Message sent', data }))
                .catch((error) => res.json({ message: 'Could not send message', error }))
        })
    }

    init() {
        // Only allowed logged in users
        messageRouter.use(this.passport.authenticate('jwt', { session: false }))
        this.routes()
        return messageRouter
    }
}

/*
Export
*/
module.exports = MessageRouterClass