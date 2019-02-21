/*
Imports & configs
*/
const mongoose = require('mongoose');
const { Schema } = mongoose;
const jwt = require('jsonwebtoken');
const dotenv = require('dotenv').config()
//


/*
Model definition
*/
const messageSchema = new Schema({
    username: String,
    content: String,
    creation_date: { 
        
        type: Date,
        default: Date.now
    }, 

})

/*
Method
*/
messageSchema.methods.generateJwt = function generateJwt() {
    // set expiration
    const expiry = new Date();
    expiry.setDate(expiry.getDate() + 59);

    // JWT creation
    return jwt.sign({
        _id: this._id,
        username: this.username,
        content: this.content,
        date: this.creation_date,
        expireIn: '10s',
        exp: parseInt(expiry.getTime() / 100, 10)
    }, process.env.JWT_SECRET)
};

/*
Export
*/
const messageModel = mongoose.model('message', messageSchema);
module.exports = messageModel;