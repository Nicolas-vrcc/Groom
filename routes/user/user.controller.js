/*
Import
*/
const UserModel = require('../../models/user.model')
const bcrypt = require('bcryptjs')
//

/*
Functions
*/
function signup(body) {
    // Search for user
    return new Promise((resolve, reject) => {
        UserModel.findOne({ username: body.username }, (error, user) => {
            if (error) {
                // Mongo Error
                return reject(error)
            }
            else if (user) {
                // User already exists
                return reject({ message: 'user already exists' })
            }
            else {
                // Register new user
                // Crypt password
                bcrypt.hash(body.password, 10)
                    .then(hashedPassword => {
                        // Replace clear password
                        body.password = hashedPassword

                        // Save user
                        UserModel.create(body, (error, newUser) => {
                            if (error) { // Mongo error
                                return reject(error)
                            }
                            else { // User registrated
                                return resolve({ user: newUser })
                            }
                        })
                    })
                    .catch(hashError => {
                        console.log('error', hashError)
                        return reject(hashError)
                    })
            }
        })
    })
}

function login(body, res) {
    return new Promise((resolve, reject) => {
        console.log('inside login promise')
        UserModel.findOne({ username: body.username }, (error, user) => {
            if (error) reject(error)
            else if (!user) reject('Unknow user')
            else {
                // Check password
                const validPassword = bcrypt.compareSync(body.password, user.password)
                if (!validPassword) {
                    reject('Password not valid')
                } else {
                    // Set cookie
                    console.log('all good, setting cookie')
                    const token = user.generateJwt()
                    res.cookie("groom-token", token)
                    // Resolve user data
                    resolve({ user, token })
                }
            }
        })
    })
}

/*
Export
*/
module.exports = {
    signup,
    login
}
//