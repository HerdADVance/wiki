const db = require('../config/database.js');

class UserRepository {
	static async create(user){

		const newUserData = {
		    email: user.email,
			username: user.username,
			password: user.password
		};

		const [newUser] = await db('users').insert(newUserData).returning('username');
		return newUser;
	}
}

module.exports = UserRepository;
