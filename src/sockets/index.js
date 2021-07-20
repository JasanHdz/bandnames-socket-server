const { Socket } = require("socket.io")

function socketController(socket = new Socket) { {
    socket.on('message', (payload) => {
      console.log(payload)
    })
    socket.emit('message', { admin: 'Nuevo mensaje' })
  }
}

module.exports = {
  socketController
}