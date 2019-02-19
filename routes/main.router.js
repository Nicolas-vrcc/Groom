/*
Imports
*/
// Nodejs
const { Router } = require('express');

// Inner
const UserRouterClass = require('./user/user.routes.js');
//

/* 
Definition des router
*/
// Parent
const apiRouter = Router();

// Child
const userRouter = new UserRouterClass();
//

/* 
Définition des routes
*/
apiRouter.use('/user', userRouter.init());
//

/* 
Export
*/
module.exports = apiRouter;
//