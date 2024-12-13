const session = require('express-session');

const sessionMiddleware = session({
    secret: 'get a better secret key',
    saveUninitialized: false,
    resave: false,
    cookie: {
        maxAge: 60000 * 60 * 24 * 7 // 1 week
    }
    // store: {

    // }
})

module.exports = sessionMiddleware;