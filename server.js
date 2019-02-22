const express = require('express')
const path = require('path')
require('dotenv').config()
const bodyParser = require('body-parser')
const cookieParser = require('cookie-parser')
const cors = require('cors')
const mainRouter = require('./routes/main.router')
const dbConnect = require('./services/dbconnect')
const handleErrors = require('./services/error')

const app = express()

// Setup Socket.io
const http = require('http').Server(app)
const io = require('socket.io')(http)

io.on('connection', () => {
    console.log('new user')
})

class ServerCLass{
    init(){
        // Allow requests
        app.use(cors({ origin: process.env.CLIENT_URL, credentials: true }))

        // Body-parser
        app.use(bodyParser.json({ limit: '10mb' }))
        app.use(bodyParser.urlencoded({ extended: true }))

        // Read cookies
        app.use(cookieParser())

        // Serve the static files from the React app
        app.use(express.static(path.join(__dirname, 'client/build')))

        // Setup the API routes
        app.use('/api', mainRouter)

        // Handles any requests that don't match the ones above
        app.get('*', (req, res) => {
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
                app.listen(port, () => {
                    console.log({
                        monngo: `BDD is connected ${db}!`,
                        server: `Server listening on port ${port}!`
                    })
                })
            })
            .catch(err => console.log(`Error MongoDB ${err}`))
    }
}

new ServerCLass().init()