const express = require('express');

const { showHomepage } = require('../controllers/mainController.js');

// Init Router
const router = express.Router();

// Get all Posts
router.get('/', showHomepage);


module.exports = router;
