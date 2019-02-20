/*
Imports
*/
const express = require('express')
const userRouter = express.Router({ mergeParams: true })
const { signup, login } = require('./user.controller')

/*
Routes definition
*/
class UserRouterClass {
    constructor({ passport }) {
        this.passport = passport
    }

    routes() {
        // Get current user
        userRouter.get('/', this.passport.authenticate('jwt', { session: false }), (req, res) => {
            res.json({ user: req.user })
        })

        // Signup user
        userRouter.post('/signup', (req, res) => {
            // Use controller function
            signup(req.body, res)
                .then(apiResponse => res.json(apiResponse))
                .catch(apiResponse => res.json(apiResponse))
        })

        // Login
        userRouter.post('/login', (req, res) => {
            // Use controller function
            login(req.body, res)
                .then(apiResponse => res.json(apiResponse))
                .catch(apiResponse => res.json(apiResponse))
        })
    }

    init() {
        this.routes()
        return userRouter
    }
}

/*
Export
*/
module.exports = UserRouterClass