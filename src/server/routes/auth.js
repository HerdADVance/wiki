const express = require('express');

// Controller Methods
const { 
  login,
  loginCheck,
  loginTest,
  logout,
  register,
  registerCheck,
  splash
} = require('../controllers/authController.js');

// Validators
const UserValidator = require('../validators/UserValidator.js');

// Init Router
const router = express.Router();

// Routes
router.get('/login', login);
router.get('/register', register);

router.post('/logintest', loginTest);
router.post('/login', loginCheck);
router.post('/logout', logout);
router.post('/register', UserValidator.register(), registerCheck);

router.get('/splash', splash);

module.exports = router;


