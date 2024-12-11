const express = require('express');
const passport = require('passport');

// Controller Methods
const { 
  login,
  loginCheck,
  register,
  registerCheck,
  testCallback
} = require('../controllers/authController.js');

// Validators
const UserValidator = require('../validators/UserValidator.js');

// Init Router
const router = express.Router();

// Routes
router.get('/login', login);
//router.post('/login', UserValidator.login(), passportLoginCheck);
// router.post('/login', (req, res, next) => {
//   passport.authenticate('local-login', (err, user, info) => {
//     console.log('cb');
//   });
// });
router.get('/register', register);
router.post('/register', UserValidator.register(), registerCheck);


router.post('/login', (req, res, next) => {
  passport.authenticate('local-login', {
    successRedirect: '/topics',
    failureRedirect: '/pages'
  })(req, res, next); // Call passport.authenticate with req and res
});


module.exports = router;


