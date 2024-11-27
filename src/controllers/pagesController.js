
const db = require('../config/database.js');


const getPage = async (req, res, next) => {
    const pageId = req.params.pageId;
    const page = await db('users').where({ id: pageId }).first();
};

module.exports = {
    getPage
};



