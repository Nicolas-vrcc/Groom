const express = require('express')
const path = require('path')
const bodyParser = require('body-parser')
const cookieParser = require('cookie-parser')
const morgan = require('morgan')
const cors = require('cors')
const http = require('http')
const dotenv = require('dotenv')
const mainRouter = require('./routes/main.router')
const dbConnect = require('./services/dbconnect')
const handleErrors = require('./services/error')
const SocketService = require('./services/socket')

dotenv.config()
// Setup server with Express and Socket.io
const app = express()
const server = http.Server(app)
const socket = new SocketService(server)

class ServerCLass {
    init(){
        // Log requests
        app.use(morgan('tiny'))

        // Allow requests
        app.use(cors({ origin: process.env.CLIENT_URL, credentials: true }))

        // Body-parser
        app.use(bodyParser.json({ limit: '10mb' }))
        app.use(bodyParser.urlencoded({ extended: true }))

        // Read cookies
        app.use(cookieParser())

        // Serve the static files from the React app
        // app.use(express.static(path.join(__dirname, 'client/build')))

        // Add socket to requests
        app.use(function (req, res, next) {
            req.io = socket
            next()
        })

        // Setup the API routes
        app.use('/api', mainRouter)

        // Handles any requests that don't match the ones above
        app.get('/', (req, res) => {
            res.sendFile(path.join(__dirname + '/client/build/index.html'))
        })

        // Handle uncaught errors
        app.use(handleErrors)

        this.launch()
    }
    launch(){
        // Connecter la BDD
        dbConnect()
            .then(db => {
                let port = 5000
                // Start server
                server.listen(port)
            })
            .catch(err => console.log(`Error MongoDB ${err}`))
    }
}

new ServerCLass().init()
