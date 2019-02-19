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
apiRouter.get('/test', (req, res) => {
  res.json({ message: 'test API route' })
})
//

/* 
Export
*/
module.exports = apiRouter;
//