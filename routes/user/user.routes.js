/* 
Import & config
*/
    const express = require('express');
    const userRouter = express.Router();
    const User = require('../../models/user.model')
//

/* 
Definition
*/
    class UserRouterClass {
        constructor(){}

        routes(){
            // Create
            userRouter.post( '/', (req, res) => {
                const { username, password } = req.body
                if(req.body){
                    User.create({ username, password }, function (err, small) {
                        if (err) return handleError(err);
                        // saved!
                    })
                    res.json({ msg: "Created User", body: req.body })
                }else{
                    res.json({ msg: "Error" })
                }
            })

            // Read
            userRouter.get( '/', (req, res) => {
                res.json( ["guy 1", "guy 2", "guy 3"])
            })

            // Update
            userRouter.put( '/', (req, res) => {
                res.json( { msg: "Update Post" } )
            })

            // Delete
            userRouter.delete( '/', (req, res) => {
                res.json( { msg: "Delete Post" } )
            })
        }

        init(){
            this.routes();
            return userRouter;
        }
    }
//

/* 
Export
*/
module.exports = UserRouterClass;
//