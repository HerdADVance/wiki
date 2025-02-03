
const { validationResult } = require('express-validator');
const formatErrors = require('../util/formatErrors.js');
const handleValidation  = require('../util/handleValidation.js');
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
  	console.log(error)
    return res.status(400).json({ message: "There was a problem deleting the user" });
  }
};

// Requires isAdmin middleware
const patchUser = async (req, res, next) => {

	// Validate request
	const error = handleValidation(validationResult(req))
	if(error.message) return res.status(400).json({ message: error.message })

	// Update user's role or return error
	const updated = await UserRepository.updateRole(req.params.userId, req.body.roleId)
	if(updated.error) return res.status(400).json({ message: updated.error })

	// Return success message
	const message = `User ${updated.user.username}'s role succesfully updated`
	return res.status(200).json({ message });
};


module.exports = {
	getUsers,
	deleteUser,
	patchUser
}