const { body, checkExact } = require('express-validator');

class PagesValidator {
    
  static create(){
    return checkExact([
      body('title')
        .isLength({ min: 7 }).withMessage('Title must be at least 7 characters long'),
    ]);
  }

  // static addTopic(){
  //   return checkExact([
  //     body('title')
  //       .isLength({ min: 7 }).withMessage('Title must be at least 7 characters long'),
  //   ]);
  // }

}

module.exports = PagesValidator;

//   .matches(/\d/).withMessage('Password must contain a number')
//   .matches(/[A-Z]/).withMessage('Password must contain an uppercase letter')
