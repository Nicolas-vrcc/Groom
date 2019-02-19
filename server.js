const express = require('express');
const path = require('path');
const mainRouter = require('./routes/main.router');
const dbConnect = require('./services/dbconnect')
const bodyParser = require('body-parser');

const app = express();

class ServerCLass{
    init(){
        
        // Body-parser
        app.use(bodyParser.json({ limit: '10mb' }));
        app.use(bodyParser.urlencoded({ extended: true }));

        // Serve the static files from the React app
        app.use(express.static(path.join(__dirname, 'client/build')));

        // Setup the API routes
        app.use('/', mainRouter);

        // Handles any requests that don't match the ones above
        app.get('*', (req, res) => {
            res.sendFile(path.join(__dirname + '/client/build/index.html'));
        });

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
                    });
                });
            })
            .catch(err => console.log(`Error MongoDB ${err}`));
    }
}

new ServerCLass().init()