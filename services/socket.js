const socket = require('socket.io')

class SocketService {
  constructor(server) {
    this.io = socket(server)
    this.io.on('connection', () => {
      console.log('new connection')
    })
  }

  sendMessage(content, room, date, author) {
    this.io.emit('new message', { content, room, date, author })
  }
}

module.exports = SocketService