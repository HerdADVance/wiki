const argon2 = require('argon2');

async function hashPassword(password) {
	try {
		const hash = await argon2.hash(password);
		return hash;
	} catch (error) {
		console.error('Error hashing password:', error);
		throw error;
	}
}

module.exports = hashPassword;