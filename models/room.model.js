/*
Imports & configs
*/
const mongoose = require('mongoose')
const { Schema } = mongoose

/*
Model definition
*/
const roomSchema = new Schema({
    name: {
        unique: true,
        required: true,
        type: String
    },
    creator: String,
    users: [String]
})

/*
Export
*/
const RoomModel = mongoose.model('room', roomSchema)
module.exports = RoomModel