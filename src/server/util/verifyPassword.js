const argon2 = require('argon2');

async function verifyPassword(storedHash, inputPassword) {
  try {
    if (await argon2.verify(storedHash, inputPassword)) {
      return true; // Password matches
    } else {
      return false; // Password does not match
    }
  } catch (err) {
    // Handle any errors
    console.error('Error verifying password:', err);
    return false;
  }
}

module.exports = verifyPassword;