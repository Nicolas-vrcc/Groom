/* 
Imports
*/
const mongoose = require('mongoose')
//

/* 
Config
*/
const dbConnect = () => {
    return new Promise((resolve, reject) => {

        // Connecter la BDD
        mongoose.connect(
            'mongodb://127.0.0.1/chatio',
            { useNewUrlParser: true }
        )
            .then(db => resolve('mongodb://127.0.0.1/chatio'))
            .catch(error => reject(error));
    });
}
//

/* 
Export
*/
module.exports = dbConnect;