const RoomModel = require('../../models/room.model')
const MessageModel = require('../../models/message.model')

async function createRoom(name, creator) {
  try {
    const room = await RoomModel.create({
      name,
      creator,
      users: [creator]
    })
    return room
  } catch(error) {
    throw new Error(error)
  }
}

async function getAllRooms() {
  // No parameter to match all routes
  return await RoomModel.find()
}

async function getRoomMessages(name) {
  // Check if room exists
  const roomData = await RoomModel.find({ name })
  if (roomData == null) {
    throw new Error('Room does not exist')
  }

  // Find messages in database, from new to old
  return await MessageModel.find({ room: name }).sort({ date: 'desc' })
}

module.exports = { getAllRooms, createRoom, getRoomMessages }