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
		const deletion = await db('users').where('id', foundUser.data.id).del();
		console.log(deletion);
		return;
	}

	static async getAllUsers(){
		const users = await db('users')
			.select('users.id', 'users.username', 'users.email', 'users.role_id', 'roles.title as role_title')
  		.leftJoin('roles', 'users.role_id', 'roles.id');;
		return users;
	}
	
	static async findById(id, cols=['id', 'username']){
		try{
			const foundUser = await db('users').where({ id }).select(cols).first();
			if (!foundUser) {
				return { error: 'No user with that id was found' };
			}
			return { data: foundUser };
		} catch{
			return { error: 'Error retrieving the user' };
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

	static async updateRole(userId, roleId) {
		try {
			const [user] = await db('users')
				.where('id', userId)
				.update({ role_id: roleId })
				.returning(['id', 'username', 'role_id'])
			return { user }
		} catch(error) {
			console.log(error.detail)
	  	return { error: "There was an error updating the user's role" }
	  }
	}

}

module.exports = UserRepository;
