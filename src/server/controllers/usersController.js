
const { validationResult } = require('express-validator');
const formatErrors = require('../util/formatErrors.js');
const RolesRepository = require('../repositories/RolesRepository.js');
const UserRepository = require('../repositories/UserRepository.js');


const getUsers = async (req, res, next) => {
	try { 
    const users = await UserRepository.getAllUsers();
    const roles = await RolesRepository.getAllRoles();
    return res.status(200).json({ users, roles });
  } catch(error) {
    return res.status(400).json({message: "There was a problem getting users"});
  }
};

const deleteUser = async (req, res, next) => {

	const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ message: formatErrors(errors.array())});
  }

	try {
    await UserRepository.delete(req.body.userId);
    return res.status(200).json({ message: 'User successfully deleted' });
  } catch(error) {
    return res.status(400).json({ message: "There was a problem deleting the user" });
  }
};

const patchUser = async (req, res, next) => {
	const foundUser = await UserRepository.findById(req.params.userId);
	console.log(foundUser)
	console.log('Old Role Id: ' + foundUser.foundUser.role_id)
	console.log('New Role Id: ' + req.body.roleId)
	return res.status(200).json({ message: 'User successfully updated' });
};


module.exports = {
	getUsers,
	deleteUser,
	patchUser
}