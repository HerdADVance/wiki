const passport = require('passport');
const { Strategy } = require('passport-local');
const UserRepository = require('../repositories/UserRepository.js');
const verifyPassword = require('../util/verifyPassword.js');

passport.use(
	new Strategy({ usernameField: "username" }, (username, password, done) => {
		console.log('trying passport strat');
		try{
			// Find user by username or return error
			const userQuery = await UserRepository.findById(req.body.username);
			const foundUser = userQuery.foundUser
			if(!foundUser){
				throw new Error(userQuery.error);
			}

			// Check password
			const passwordVerified = await verifyPassword(foundUser.password, req.body.password)
			if(!passwordVerified){
				throw new Error("Incorrect password");
			}

			done(null, foundUser)
		} catch(err){
			done(err, null);
		}
	})
);

module.exports = passport;