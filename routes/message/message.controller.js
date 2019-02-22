const MessageModel = require('../../models/message.model')
const RoomModel = require('../../models/room.model')

async function sendMessage(content, room, author) {
    // Check if room exists
    const roomData = await RoomModel.find({ name: room })
    if (roomData == null) {
        throw new Error('Room does not exist')
    }
    // Send message
    const date = Date.now()
    return await MessageModel.create({ content, room, author, date })
}

module.exports = { sendMessage }