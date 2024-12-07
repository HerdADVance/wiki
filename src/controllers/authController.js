const db = require('../config/database.js');
const { validationResult } = require('express-validator');
const UserRepository = require('../repositories/UserRepository.js');

const login = async (req, res, next) => {
	res.render('auth/login');
};

const register = async (req, res, next) => {
	res.render('auth/register');
};


const loginCheck = async (req, res, next) => {
	const username = req.body.username;
	const password = req.body.password;
	foundUser = await db('users').where({ username: username }).first();
	
	if(!foundUser){
		console.log('No user with that username');
	}
	if(foundUser && foundUser.password !== password){
		console.log('Password no matchie');
	}

	console.log(foundUser);
	res.redirect('/login');
};

const registerCheck = async (req, res, next) => {
	const errors = validationResult(req);

	if (!errors.isEmpty()) {
		console.log(errors);
		return res.redirect('/register');
	}

	try {
	    const newUser = await UserRepository.create(req.body);
		console.log(newUser);
		return res.redirect('/register');
	} catch (error) {
	    return(error);
	}
		
};


module.exports = {
	login,
	register,
	loginCheck,
	registerCheck
}