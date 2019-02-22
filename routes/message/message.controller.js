const MessageModel = require('../../models/message.model')
const RoomModel = require('../../models/room.model')

async function sendMessage(content, room, author) {
    // Check if room exists
    const roomData = await RoomModel.findOne({ name: room })
    if (roomData == null) {
        throw new Error('Room does not exist')
    }
    // Add user to room if he's not there already
    if (!roomData.users.includes(author)) {
        roomData.users.push(author)
        await roomData.save()
    }
    // Send message
    const date = Date.now()
    return await MessageModel.create({ content, room, author, date })
}

module.exports = { sendMessage }