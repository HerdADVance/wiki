
const RolesRepository = require('../repositories/RolesRepository.js');
const UserRepository = require('../repositories/UserRepository.js');


const getUsers = async (req, res, next) => {
	try { 
    const users = await UserRepository.getAllUsers();
    const roles = await RolesRepository.getAllRoles();
    return res.status(200).json({ users, roles });
  } catch(error) {
    return res.status(401).json({message: "There was a problem getting users"});
  }
};

const deleteUser = async (req, res, next) => {
	try {
		console.log(req.body.userId)
		// validate is integer
    await UserRepository.delete(req.body.userId);
    return res.status(200).json({ message: 'User successfully deleted' });
  } catch(error) {
    return res.status(401).json({ message: "There was a problem deleting the user" });
  }
};


module.exports = {
	getUsers,
	deleteUser
}