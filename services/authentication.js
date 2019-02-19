/*
Imports
*/
const UserModel = require('../models/user.model')
const JwtStrategy = require('passport-jwt').Strategy


/*
Service definition
*/
// Extract token from cookie
const cookieExtractor = (req) => {
    let token = null
    // console.log('extractor req', req)
    console.log(req.cookies)
    if (req && req.cookies) {
        console.log('cookies are set')
        token = req.cookies['groom-token']
    }
    return token
}

// JWT authentication
const authJwt = (passport) => {
    // #JWT Options for passport
    const opts = {
        jwtFromRequest: cookieExtractor,
        secretOrKey: process.env.JWT_SECRET,
    }

    // #JWT strategy
    passport.use(new JwtStrategy(opts, (jwtPayload, done) => {
        UserModel.findOne({ _id: jwtPayload._id }, (err, user) => {
            if (err) { return done(err, false) }
            if (user) {
                return done(null, user)
            }
            else { return done(null, false) }
        })
    }))
}
// 


/*
Export service
*/
module.exports = {
    setAuthentication: (passport) => {
        authJwt(passport)
    },
}