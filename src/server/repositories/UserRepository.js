const db = require('../config/database.js');

class UserRepository {
	
	static async create(user){
		const newUserData = {
			email: user.email,
			username: user.username,
			password: user.password,
			role_id: user.role_id
		};

		const [newUser] = await db('users').insert(newUserData).returning(['id', 'username']);
		return newUser;
	}

	static async delete(id){
		const foundUser = await this.findById(id);
		const deletion = await db('users').where('id', foundUser.foundUser.id).del();
		console.log(deletion);
		return;
	}

	static async getAllUsers(){
		const users = await db('users')
			.select('users.*', 'roles.title as role_title')
  		.leftJoin('roles', 'users.role_id', 'roles.id');;
		return users;
	}
	
	static async findById(id){
		try{
			const foundUser = await db('users').where({ id }).select('id', 'username').first();
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
