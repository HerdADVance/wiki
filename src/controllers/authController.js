const db = require('../config/database.js');
const { validationResult } = require('express-validator');
const UserRepository = require('../repositories/UserRepository.js');
const formatErrors = require('../util/formatErrors.js');
const hashPassword = require('../util/hashPassword.js');
const verifyPassword = require('../util/verifyPassword.js');

const login = async (req, res, next) => {
	res.render('auth/login');
};

const register = async (req, res, next) => {
	res.render('auth/register');
};


const loginCheck = async (req, res, next) => {

	// Return validation error(s) message if needed
	const errors = validationResult(req);
	if (!errors.isEmpty()) {
		return res.status(400).json({errors: formatErrors(errors.array())});
	}

	// Find user by username or return error
	const userQuery = await UserRepository.findById(req.body.username);
	const foundUser = userQuery.foundUser
	if(!foundUser){
		return res.status(400).json({errors: userQuery.error});
	}

	// Check password
	const passwordVerified = await verifyPassword(foundUser.password, req.body.password)
	if(!passwordVerified){
		return res.status(400).json({errors: 'Incorrect password'});
	}

	// Return logged in user
	return res.status(201).json({foundUser: foundUser});
};


const registerCheck = async (req, res, next) => {

	// Return validation error(s) message if needed
	const errors = validationResult(req);
	console.log(errors)
	if (!errors.isEmpty()) {
		return res.status(400).json({details: formatErrors(errors.array())});
	}

	// Hash Password
	req.body.password = await hashPassword(req.body.password);

	// Add new user to database or return error message
	try {
	    const newUser = await UserRepository.create(req.body);
	} catch (error) {
		return res.status(400).json({details: "There was a problem attempting to create a new user"});
	}

	// Redirect newly registered and logged in user to welcome page	
	return res.status(201).json({details: "New user created"});
		
};


module.exports = {
	login,
	register,
	loginCheck,
	registerCheck
}