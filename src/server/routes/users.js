const express = require('express');
const router = express.Router();
const { isAdmin } = require('../middleware/auth.js');
const { deleteUser, getUsers } = require('../controllers/usersController.js');

// Validators
//const PagesValidator = require('../validators/PagesValidator.js');

// Routes
router.get('/', isAdmin, getUsers);
router.post('/delete', isAdmin, deleteUser);

module.exports = router;
