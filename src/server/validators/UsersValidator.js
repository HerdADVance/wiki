const { body, checkExact } = require('express-validator');

class UsersValidator {

  static delete(){
    return checkExact([
      body('userId')
        .isInt({ no_symbols: true }).withMessage('User id must be an integer')
    ])
  }

  static patch(){
    return checkExact([
      body('roleId')
        .isInt({ no_symbols: true }).withMessage('Role id must be an integer')
    ])
  }

}

module.exports = UsersValidator;
