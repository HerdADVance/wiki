const passport = require('passport');
const { Strategy } = require('passport-local');
const UserRepository = require('../repositories/UserRepository.js');
const verifyPassword = require('../util/verifyPassword.js');


// (DE)SERIALIZERS
passport.serializeUser((user, done) => {
    done(null, user.id);
});

passport.deserializeUser(async (id, done) => {
    try{
        const userQuery = await UserRepository.findById(id);
        const foundUser = userQuery.foundUser;
        if(!foundUser) throw new Error(userQuery.error);
        done(null, foundUser)
    } catch(err){
        done(err, null);
    }
});


// STRATEGIES
passport.use('local-login', new Strategy(
	{ 
		usernameField: "username",
		passReqToCallback: true
	}, 
	async (req, username, password, done) => {
		try{
			// Find user by username or return error
			const userQuery = await UserRepository.findByUsername(username);
			const foundUser = userQuery.foundUser

			if(!foundUser){
				return done(null, false, {message: userQuery.error});
			}

			// Check password
			const passwordVerified = await verifyPassword(foundUser.password, password)
			if(!passwordVerified){
				return done(null, false, {message: "Incorrect password"});
			}

			return done(null, foundUser)
		} catch(err){
			done(err, null);
		}
	})
);

module.exports = passport;


