const bcrypt = require('bcryptjs');
const helpers = {};
// Encrypting the password
helpers.encryptPassword = async (password) => {
  const salt = await bcrypt.genSalt(10);
  const hash = await bcrypt.hash(password, salt);
  return hash;
};

// Comparing password to check if this user exists with this password.
helpers.matchPassword = async (password, savedPassword) => {
  try {
    return await bcrypt.compare(password, savedPassword);
  } catch (error) {
    console.error(error.message);
  }
};

module.exports = helpers;
