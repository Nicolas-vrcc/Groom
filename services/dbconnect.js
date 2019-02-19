/* 
Imports
*/
const mongoose = require('mongoose')
require('dotenv').config()
//

/* 
Config
*/
const dbConnect = () => {
    return new Promise((resolve, reject) => {
        // Eviter les warnings
        mongoose.set('useCreateIndex', true)
        // Connecter la BDD
        mongoose.connect(
            process.env.DB_URL,
            { useNewUrlParser: true }
        )
            .then(db => resolve(process.env.DB_URL))
            .catch(error => reject(error));
    });
}
//

/* 
Export
*/
module.exports = dbConnect;