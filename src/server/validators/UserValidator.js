const { body } = require('express-validator');

class UserValidator {
    
  static login(){
    return [
        body('username')
          .isLength({ min: 5 }).withMessage('Username must be at least 5 characters long'),
    ];
  }

  static register(){
    return [
      body('email')
        .isEmail().withMessage('Email must be a valid email address'),
      body('username')
        .isLength({ min: 5 }).withMessage('Username must be at least 5 characters long'),
      body('password')
        .isLength({ min: 8 }).withMessage('Password must be at least 8 characters long')
        .custom((value, { req }) => {
          if (value !== req.body.passwordConfirm) {
            throw new Error('Password and confirm password must match');
          }
          return true;
        })
    ];
  }

}

module.exports = UserValidator;

//   .matches(/\d/).withMessage('Password must contain a number')
//   .matches(/[A-Z]/).withMessage('Password must contain an uppercase letter')
