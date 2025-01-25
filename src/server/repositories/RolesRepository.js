const db = require('../config/database.js');

class RolesRepository {

	static async getAllRoles(){
		const roles = await db('roles');
		return roles;
	}

}

module.exports = RolesRepository;
