const express = require('express');

const { 
	showHomepage,
	sessionTest,
	sessionTwoTest,
	sessionUserTest,
	passportTest,
	cookieTest
} = require('../controllers/mainController.js');

// Init Router
const router = express.Router();

// Get all Posts
router.get('/', showHomepage);
router.get('/session', sessionTest);
router.get('/session2', sessionTwoTest);
router.get('/sessionuser', sessionUserTest);
router.get('/passport', passportTest);
router.get('/cookie', cookieTest);


module.exports = router;
