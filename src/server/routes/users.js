const express = require('express');
const router = express.Router();
const { isAdmin } = require('../middleware/auth.js');
const { deleteUser, getUsers, patchUser } = require('../controllers/usersController.js');

// Validators
const UsersValidator = require('../validators/UsersValidator.js');

// Routes
router.get('/', isAdmin, getUsers);
router.post('/delete', isAdmin, UsersValidator.delete(), deleteUser);
router.patch('/:userId', isAdmin, patchUser);

module.exports = router;
