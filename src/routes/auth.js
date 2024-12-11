const express = require('express');

// Controller Methods
const { 
  login,
  loginCheck,
  register,
  registerCheck
} = require('../controllers/authController.js');

// Validators
const UserValidator = require('../validators/UserValidator.js');

// Init Router
const router = express.Router();

// Routes
router.get('/login', login);
router.post('/login', UserValidator.login(), loginCheck);
router.get('/register', register);
router.post('/register', UserValidator.register(), registerCheck);

module.exports = router;