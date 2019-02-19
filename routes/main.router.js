/*
Imports
*/
const { Router } = require('express')
const UserRouterClass = require('./user/user.routes')

// Setup passport
const passport = require('passport');
const { setAuthentication } = require('../services/authentication');
setAuthentication(passport);

/* 
Definition des router
*/
// Parent
const apiRouter = Router()

// Child
const userRouter = new UserRouterClass({ passport })
//

/* 
Définition des routes
*/
apiRouter.use('/user', userRouter.init())
//

/* 
Export
*/
module.exports = apiRouter
//