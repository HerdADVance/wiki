const cors = require('cors');

const corsMiddleware = cors({
  origin: process.env.CLIENT_URL,
  optionsSuccessStatus: 200,
  credentials: true
});

module.exports = corsMiddleware;
