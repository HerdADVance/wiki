// Sequelize setup (NOT USING)

import Sequelize from 'sequelize';
import config from './database.js';

const env = process.env.NODE_ENV || 'development';
const dbConfig = config[env];

const sequelize = new Sequelize(
  dbConfig.database,
  dbConfig.username,
  dbConfig.password,
  {
    host: dbConfig.host,
    dialect: dbConfig.dialect,
    port: dbConfig.port,
    logging: console.log,
  }
);

// Test connection
async function testConnection() {
  try {
    await sequelize.authenticate();
    console.log('Connection to the database has been established successfully.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
}

// Run test connection or not
if(process.env.RUN_TEST_CONNECTION === 'true'){
  testConnection();
}

export default sequelize;