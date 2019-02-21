/*
Imports
*/
const { Router } = require('express')
const UserRouterClass = require('./user/user.routes')
const RoomRouterClass = require('./room/room.routes')
const MessageRouterClass = require('./message/message.routes')

// Setup passport
const passport = require('passport')
const { setAuthentication } = require('../services/authentication')
setAuthentication(passport)

/* 
Definition des router
*/
// Parent
const apiRouter = Router()

// Child
const userRouter = new UserRouterClass({ passport })
const roomRouter = new RoomRouterClass({ passport })
const messageRouter = new MessageRouterClass({ passport })
//

/* 
Définition des routes
*/
apiRouter.use('/user', userRouter.init())
apiRouter.use('/room', roomRouter.init())
apiRouter.use('/message', messageRouter.init())
//

/* 
Export
*/
module.exports = apiRouter
//