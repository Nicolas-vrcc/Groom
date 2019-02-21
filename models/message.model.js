/*
Imports & configs
*/
const mongoose = require('mongoose')
const { Schema } = mongoose

/*
Model definition
*/
const messageSchema = new Schema({
    username: String,
    content: String,
    date: Number
})
/*
Export
*/
const MessageModel = mongoose.model('message', messageSchema)
module.exports = MessageModel