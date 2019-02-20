/*
Import
*/
const UserModel = require('../../models/user.model')
const bcrypt = require('bcryptjs')
//

/*
Functions
*/
function signup(body, res) {
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
                        UserModel.create(body, (error, user) => {
                            if (error) { // Mongo error
                                reject(error)
                            }
                            else { // User registrated
                                // Set cookie
                                const token = user.generateJwt()
                                res.cookie("groom-token", token)
                                resolve({ user })
                            }
                        })
                    })
                    .catch(hashError => {
                        console.log('error', hashError)
                        reject(hashError)
                    })
            }
        })
    })
}

function login(body, res) {
    return new Promise((resolve, reject) => {
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
                    const token = user.generateJwt()
                    res.cookie("groom-token", token)
                    // Resolve user data
                    resolve({ user })
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