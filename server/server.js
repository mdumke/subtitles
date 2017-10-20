const express = require('express')
const http = require('http')
const path = require('path')
const socketIO = require('socket.io')

const port = process.env.PORT || 3000

const app = express()
const server = http.createServer(app)
const io = socketIO(server)

app.get('/admin', (req, res) => {
  res.sendFile(path.resolve(__dirname, '../client/index.html'))
})

app.get('/', (req, res) => {
  res.sendFile(path.resolve(__dirname, '../client/index.html'))
})

app.use(express.static('public'))

io.on('connection', socket => {
  console.log('client connected')

  socket.on('disconnect', () => {
    console.log('client disconnected')
  })

  socket.on('position-update', state => {
    console.log(state)
  })
})

server.listen(port, () => {
  console.log('listening on port 3000')
})
