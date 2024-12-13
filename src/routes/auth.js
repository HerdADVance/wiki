const express = require('express');
const passport = require('passport');

// Controller Methods
const { 
  login,
  logout,
  register,
  registerCheck,
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
    failureRedirect: '/pages',
    failureMessage: true
  })(req, res, next);
});

router.post('/logout', logout);

// (err, user, info) => {
//   if (err) { 
//     return next(err); // Handle error
//   }
//   if (!user) { 
//     return res.status(401).json({ msg: info.message }); // Authentication failed
//   }

//   req.logIn(user, (err) => {
//     if (err) { 
//       return next(err); // Handle error during login
//     }
//     return res.json({ msg: 'Login successful', user }); // Successful response
//   });


module.exports = router;


