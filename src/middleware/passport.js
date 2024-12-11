const passport = require('passport');
const { Strategy } = require('passport-local');
const UserRepository = require('../repositories/UserRepository.js');
const verifyPassword = require('../util/verifyPassword.js');


passport.serializeUser((user, done) => {
    done(null, user.id);
});

passport.deserializeUser((id, done) => {
    try{
        const userQuery = UserRepository.findById(id);
        const foundUser = userQuery.foundUser;
        if(!foundUser) throw new Error(userQuery.error);
        done(null, foundUser)
    } catch(err){
        done(err, null);
    }
});

passport.use('local-login', new Strategy(
	{ 
		usernameField: "username",
		passReqToCallback: true
	}, 
	async (req, username, password, done) => {
		console.log('trying passport login strat');
		console.log(username);
		console.log(password);
		try{
			// Find user by username or return error
			const userQuery = await UserRepository.findByUsername(username);
			const foundUser = userQuery.foundUser
			console.log(foundUser);
			if(!foundUser){
				throw new Error(userQuery.error);
			}

			// Check password
			const passwordVerified = await verifyPassword(foundUser.password, password)
			if(!passwordVerified){
				console.log('incorrect password');
				throw new Error("Incorrect password");
			}

			
			
			console.log(req.user);
			console.log(req.session);
			console.log('==== ENDING STRAT ==== ');
			done(null, foundUser)
		} catch(err){
			console.log('### ERROR IN STRAT ###');
			console.log(err);
			done(err, null);
		}
	})
);

module.exports = passport;


