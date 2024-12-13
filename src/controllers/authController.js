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

const logout = async (req, res, next) => {
	req.logout(function(err) {
		if (err) { return next(err); }

		// Clear user data from session
		req.session.user = null;
		
		// Regenerate session and redirect to homepage
		req.session.regenerate(function(err) {
	  		if (err) { return next(err); }
	  		
	  		req.session.save(function(err) {
	  			if (err) { return next(err); }
	  			res.redirect('/');
	  		});
		});
	});
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
	register,
	login,
	logout,
	registerCheck
}