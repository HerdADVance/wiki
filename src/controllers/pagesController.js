
const db = require('../config/database.js');


const getPages = async (req, res, next) => {
    const topics = await db('topics');
    const pages = await db('pages');
    res.render('pages/pages', { pages: pages, topics: topics });
};

const getPage = async (req, res, next) => {
    const pageId = req.params.pageId;
    const page = await db('pages').where({ id: pageId }).first();
    res.render('pages/page', { page: page });
};

const createPage = async (req, res, next) => {

    // const ids = await db('pages').insert({
    //     title: req.body.title,
    //     intro: req.body.intro
    // });
    // await db('articles_topics').insert({ article_id: 1, topic_id: 2 });
    
    await db.transaction(async (trx) => {
        try {
            const newPage = await trx('pages').insert({
                title: req.body.title,
                intro: req.body.intro
            }).returning('id');

            await trx('pages_topics').insert({
                page_id: newPage[0].id,
                topic_id: parseInt(req.body.topic)
            });

        } catch (error) {
          console.error(error);
          throw error;
        }
    });

    res.redirect('/pages');

};

module.exports = {
    getPages,
    getPage,
    createPage,
};



