const express = require('express');

const { showHomepage, cookieTest } = require('../controllers/mainController.js');

// Init Router
const router = express.Router();

// Get all Posts
router.get('/', showHomepage);
router.get('/cookie', cookieTest);


module.exports = router;
