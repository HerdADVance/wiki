const { body } = require('express-validator');

class UserValidator {
    static register(){
        return [
          body('email').isEmail().withMessage('Must be a valid email'),
          body('username').isLength({ min: 5 }).withMessage('Username must be at least 5 characters long'),
          body('password').isLength({ min: 8 }).withMessage('Password must be at least 8 characters long')
        ];
    }
}

module.exports = UserValidator;