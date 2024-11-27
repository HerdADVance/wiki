const express = require('express');
const { showHomepage } = require('../controllers/mainController.js');
const router = express.Router();

// Get all Posts
router.get('/:pageId', getPage);


module.exports = router;
