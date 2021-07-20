const express = require('express')
const { join } = require('path')
const { config } = require('../config')
const { socketController } = require('../sockets')

class Server {
  constructor() {
    this.app = express()
    this.server = require('http').createServer(this.app)
    this.io = require('socket.io')(this.server)
    this.port = config.port || '3000'
    this.middlewares()
    this.sockets()
  }

  middlewares() {
    this.app.use(express.static(join(__dirname, '../../public')))
  } 

  sockets() {
    this.io.on('connection', socketController)
  }
 
  listen() {
    this.server.listen(this.port, (err) => {
      if(err) throw new Error(err)
      console.log(`el servidor corriendo en http://localhost:${this.port}`)
    })
  }
}

module.exports = Server