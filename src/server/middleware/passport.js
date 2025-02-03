const passport = require('passport');
const { Strategy } = require('passport-local');
const UserRepository = require('../repositories/UserRepository.js');
const verifyPassword = require('../util/verifyPassword.js');


// (DE)SERIALIZERS
passport.serializeUser((user, done) => {
	done(null, {
		id: user.id,
		username: user.username,
		role: user.role_id
	});
});

passport.deserializeUser(async (user, done) => {
  try{
      const foundUser = await UserRepository.findById(user.id);
      if(foundUser.error) throw new Error(userQuery.error);
      done(null, foundUser.data)
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


