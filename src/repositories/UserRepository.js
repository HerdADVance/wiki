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
	
	static async findById(id){
		try{
			const foundUser = await db('users').where({ id }).select('*').first();
			if (!foundUser) {
				return {foundUser: null, error: 'No user with that username was found'};
			}
			return {foundUser: foundUser, error: null};
		} catch{
			return {foundUser: null, error: 'Error retrieving the user'};
		}
	}

	static async findByUsername(username){
		try{
			const foundUser = await db('users').where({ username }).select('*').first();
			if (!foundUser) {
				return {foundUser: null, error: 'No user with that username was found'};
			}
			return {foundUser: foundUser, error: null};
		} catch{
			return {foundUser: null, error: 'Error retrieving the user'};
		}
	}
}

module.exports = UserRepository;
