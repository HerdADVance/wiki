const express = require('express');

// Controller Methods
const { 
  loginCheck,
  logout,
  registerCheck,
  validateEditor,
  validateUser,
  // login,
  // register,
  // loginTest,
  // splash
} = require('../controllers/authController.js');

// Validators
const UserValidator = require('../validators/UserValidator.js');

// Init Router
const router = express.Router();

// Routes

router.post('/login', loginCheck);
router.post('/logout', logout);
router.post('/register', UserValidator.register(), registerCheck);
router.get('/validate-editor', validateEditor);
router.get('/validate-user', validateUser);

// router.get('/login', login);
// router.get('/register', register);
// router.post('/logintest', loginTest);
// router.get('/splash', splash);

module.exports = router;


