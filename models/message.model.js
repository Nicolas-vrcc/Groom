/*
Imports & configs
*/
const mongoose = require('mongoose')
const { Schema } = mongoose
//


/*
Model definition
*/
const messageSchema = new Schema({
    author: String,
    content: String,
    date: Number,
    room: String
})

/*
Export
*/
const MessageModel = mongoose.model('message', messageSchema)
module.exports = MessageModel