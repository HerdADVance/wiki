
const db = require('../config/database.js');


const getPages = async (req, res, next) => {
    const pages = await db('pages');
    res.render('pages/pages', { pages: pages });
};

const getPage = async (req, res, next) => {
    const pageId = req.params.pageId;
    const page = await db('pages').where({ id: pageId }).first();
    res.render('pages/page', { page: page });
};

const createPage = async (req, res, next) => {
    try {
        const ids = await db('pages').insert({
            title: req.body.title,
            intro: req.body.intro
        });
        console.log(ids);
        res.redirect('/pages');

    } catch (error) {
        console.log(error)
    }
};

module.exports = {
    getPages,
    getPage,
    createPage,
};



