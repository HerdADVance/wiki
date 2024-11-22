
const db = require('../config/database.js');

// @desc   Show Homepage
// @route  GET /
const showHomepage = async (req, res, next) => {
    const users = await db('users');
    res.status(200).json(users);
};

module.exports = {
    showHomepage
};



