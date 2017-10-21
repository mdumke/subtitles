const express = require('express')
const http = require('http')
const path = require('path')
const socketIO = require('socket.io')

const port = process.env.PORT || 3000

const app = express()
const server = http.createServer(app)
const io = socketIO(server, {
  serveClient: false
})

const supportedLangs = ['en', 'de', 'tr']
const validPaths = supportedLangs.map(l => `/lang/${l}`)

app.get(['/', '/admin'].concat(validPaths), (req, res) => {
  res.sendFile(path.resolve(__dirname, '../client/index.html'))
})

app.use(express.static('public'))

io.on('connection', socket => {
  console.log('client connected')

  socket.on('disconnect', () => {
    console.log('client disconnected')
  })

  socket.on('position-update', state => {
    console.log(`position update: ${state.newIndex}`)

    if (state.translations) {
      // emit text for each language
      Object.keys(state.translations).forEach(key => {
        if (supportedLangs.indexOf(key) === -1) return

        io.to(key).emit('new-text', {
          text: state.translations[key]
        })
      })
    }
  })

  socket.on('join', info => {
    console.log(`client joining channel ${info.lang}`)
    socket.join(info.lang)
  })
})

server.listen(port, () => {
  console.log('listening on port 3000')
})
