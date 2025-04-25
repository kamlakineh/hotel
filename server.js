const { createServer } = require('http')
const next = require('next')
const { Server } = require('socket.io')

const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler()

app.prepare().then(() => {
  const server = createServer((req, res) => {
    handle(req, res)
  })

  const io = new Server(server, {
    cors: {
      origin: dev ? 'http://localhost:3000' : '*',
      methods: ['GET', 'POST'],
      transports: ['websocket', 'polling'],
    }
  })

  io.on('connection', (socket) => {
    console.log('🔌 Client connected:', socket.id)

    // Real-time Notification
    socket.on('send-notification', (message) => {
      io.emit('new-notification', { ...message })
    })

    // Real-time Chat Message
    socket.on('send-message', (message) => {
      io.emit('receive-message', message)
    })

    socket.on('disconnect', () => {
      console.log('❌ Client disconnected:', socket.id)
    })
  })

  server.listen(3000, (err) => {
    if (err) throw err
    console.log('✅ Server ready on http://localhost:3000')
  })
})
