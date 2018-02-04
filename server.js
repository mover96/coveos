const http = require('http')
const express = require('express')
const path = require('path')
const favicon = require('serve-favicon')
const cookieParser = require('cookie-parser')
const bodyParser = require('body-parser')
const fetch = require('node-fetch')
const webpack = require('webpack')
const fs = require('fs')
const bufReplace = require('buffer-replace')

const dev = true

const tempDatabase = {}

let callbackUrlSet = 'http://leftanglebracket.com/oauthcallback'
if (dev == true) {
  callbackUrlSet = 'http://localhost:8000/oauthcallback'
}

const app = express()
const server = http.createServer(app)
const io = require('socket.io')(server)

app.set('port', process.env.PORT || 8000)

if (!dev) {
} else {
  const config = require('./webpack.config.js')
  const compiler = webpack(config)
  const webpackMiddleware = require('webpack-dev-middleware')
  app.use(require('webpack-hot-middleware')(compiler))
  app.use(webpackMiddleware(compiler, {}))
}

app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')))
app.use(require('morgan')('combined'))
app.use(require('cookie-parser')())
app.use(require('body-parser').urlencoded({ extended: true }))
app.use(
  require('express-session')({
    secret: 'keyboard cat',
    resave: true,
    saveUninitialized: true
  })
)
app.use(bodyParser.json())
app.use(express.static(path.join(__dirname, 'public')))
app.use('/react', express.static(path.join(__dirname, 'node_modules/react')))
app.use(
  '/react-dom',
  express.static(path.join(__dirname, 'node_modules/react-dom'))
)

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'))
})

app.get('/appStore', (req, res) => {
  res.sendFile(path.join(__dirname, '/src/apps/appStore/index.html'))
})

io.on('connection', socket => {
  console.log('User connected')

  socket.on('killMe', id => {
    console.log('req to kill frame')
    io.to(id).emit('killFrame', id)
  })

  socket.on('disconnect', () => {
    console.log('user disconnected')
  })
})

server.listen(app.get('port'), () => {
  console.log('Server started on port ', app.get('port'))
})
