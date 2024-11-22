const config = require('./database.js');
const { Pool } = require('pg');

// Get correct DB configuration
const env = process.env.NODE_ENV || 'development';
const dbConfig = config[env];

// Create pool connection to export
const pool = new Pool({
    user: dbConfig.username,
    host: dbConfig.host,
    database: dbConfig.database,
    password: dbConfig.password,
    port: dbConfig.port,
});

module.exports = pool