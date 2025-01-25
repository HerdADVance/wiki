const db = require('../config/database.js');
const { validationResult } = require('express-validator');
//const passport = require('passport');
const passport = require('../middleware/passport.js');
const UserRepository = require('../repositories/UserRepository.js');
const formatErrors = require('../util/formatErrors.js');
const hashPassword = require('../util/hashPassword.js');
const verifyPassword = require('../util/verifyPassword.js');


const loginCheck = (req, res, next) => {
	console.log('loginCheck route from server');
	passport.authenticate('local-login', (err, user, info) => {
		if(err){
			return next(err);
		}
		if(!user){
			return res.status(401).json({message: info.message, user: {} });
		}
		req.logIn(user, (err) => {
			if(err){
				return next(err);
			}
			return res.status(200).json({message: 'Auth successful', user: { id: user.id, username: user.username } });
		});
	})(req, res, next);
}


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
		req.body.role_id = 3;
		const newUser = await UserRepository.create(req.body);
		console.log(newUser);
		return res.status(201).json({user: {id: newUser.id, username: newUser.username} });
	} catch (error) {
		return res.status(400).json({details: "There was a problem attempting to create a new user"});
	}		
};


const validateAdmin = async (req, res, next) => {
	if (req.session.passport?.user) {
		if(req.session.passport.user.role === 1){
    	return res.status(200).json({ isAdmin: true, user: req.session.passport.user });
    }
  }
  return res.status(200).json({ isAdmin: false });
};

const validateEditor = async (req, res, next) => {
	if (req.session.passport?.user) {
		if(req.session.passport.user.role === 1 || req.session.passport.user.role === 2){
    	return res.status(200).json({ isEditor: true, user: req.session.passport.user });
    }
  }
  return res.status(200).json({ isEditor: false });
};


const validateUser = async (req, res, next) => {
	if (req.session.passport?.user) {
    return res.status(200).json({ isValidated: true, user: req.session.passport.user });
  } else {
    return res.status(200).json({ isValidated: false });
	};
};


const logout = async (req, res, next) => {
	req.logout(function(err) {
		if (err) { return next(err); }

		req.session.destroy(function(err) {
		  if (err) { return next(err); }
		  res.clearCookie('connect.sid');
		  return res.status(200).json({ message: "User logged out" });
		});
	});
};

// const login = async (req, res, next) => {
// 	const messages = req.session.messages || [];
//   	const mostRecentMessage = messages[messages.length - 1];
//     //req.session.messages = [];
// 	req.session.touch();
// 	res.render('auth/login');
// };

// const loginTest = async (req, res, next) => {
// 	console.log('loginTest route from server');
// 	console.log(req.body);
// 	return res.status(200).json({abc: '123'});
// };

// const register = async (req, res, next) => {
// 	res.render('auth/register');
// };

// const splash = async (req, res, next) => {
// 	res.render('auth/splash');
// };


module.exports = {
	loginCheck,
	registerCheck,
	validateAdmin,
	validateEditor,
	validateUser,
	logout,
	// login,
	// loginTest,
	// register,
	// splash
}