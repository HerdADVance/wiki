const passport = require('passport');
const { Strategy } = require('passport-local');

const users = [
	{ username: 'alex', password: 'vance'},
	{ username: 'alex2', password: 'vance2'},
	{ username: 'alex3', password: 'vance3'}
];


passport.serializeUser((user, done) => {
	done(null, user.id);
});

passport.deserializeUser((id, done) => {
	try{
			const foundUser = users.find((user) => user.id === id);
			if(!foundUser) throw new Error("User not found");
			done(null, foundUser)
		} catch(err){
			done(err, null);
		}
});

passport.use(
	new Strategy({ usernameField: "email" }, (username, password, done) => {
		const username = 'alex';
		const password = 'vance';
		try{
			const foundUser = users.find((user) => user.username === username);
			if(!foundUser) throw new Error("User not found");
			if(foundUser.password !== password) throw new Error ("invalid credentials");
			done(null, foundUser)
		} catch(err){
			done(err, null);
		}
	})
);

module.exports = passport;