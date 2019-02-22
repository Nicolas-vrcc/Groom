/*
Imports
*/
const express = require('express')
const roomRouter = express.Router({ mergeParams: true })
const { createRoom, getAllRooms, getRoomMessages } = require('./room.controller')

/*
Routes definition
*/
class RoomRouterClass {
    constructor({ passport }) {
        this.passport = passport
    }

    routes() {
        // Create new room
        roomRouter.post('/', (req, res) => {
            // Parse data from request and postman
            const { name } = req.body
            const { username } = req.user
            // Create room
            createRoom(name, username)
                .then((data) => res.json({ data, message: 'Room created' }))
                .catch((error) => res.status(400).json({ error, message: 'Cannot create room' }))
        })

        // Get all rooms
        roomRouter.get('/all', (req, res) => {
            getAllRooms()
                .then((data) => res.json({ message: 'Showing rooms', data }))
                .catch((error) => res.status(400).json({ message: 'Cannot show rooms', error }))
        })

        // Get room messages
        roomRouter.post('/messages', (req, res) => {
            const { room } = req.body
            getRoomMessages(room)
                .then((data) => res.json({ message: 'Showing messages', data }))
                .catch((error) => res.status(400).json({ message: 'Cannot show messages', error }))
        })
    }

    init() {
        // Only allowed logged in users
        roomRouter.use(this.passport.authenticate('jwt', { session: false }))
        this.routes()
        return roomRouter
    }
}

/*
Export
*/
module.exports = RoomRouterClass