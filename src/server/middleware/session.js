const session = require('express-session');
const KnexSessionStore = require('connect-session-knex').ConnectSessionKnexStore;
const knex = require('knex')(require('../../../knexfile').development);


const store = new KnexSessionStore({
  knex: knex,
  tablename: 'sessions', // Specify your sessions table name
  createTable: true // Automatically create the table if it doesn't exist
});

const sessionMiddleware = session({
    store: store,
    secret: 'get a better secret key',
    saveUninitialized: false,
    resave: false,
    cookie: {
        maxAge: 60000 * 60 * 24 * 7 // 1 week
    }
})

module.exports = sessionMiddleware;