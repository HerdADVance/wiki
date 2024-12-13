
const db = require('../config/database.js');


const getPages = async (req, res, next) => {
    const pages = await db('pages');
    const topics = await db('topics');
    res.render('pages/pages', { pages: pages, topics: topics });
};

const getPage = async (req, res, next) => {
    const pageId = req.params.pageId;
    let page = await db('pages').where({ id: pageId }).first();
    const pageTopics = await db('topics')
        .join('pages_topics', 'topics.id', 'pages_topics.topic_id')
        .where('pages_topics.page_id', pageId)
        .select('topics.*');
    page.topic = pageTopics[0]
    const topics = await db('topics');

    res.render('pages/page', { page: page, topics: topics });
};

const createPage = async (req, res, next) => {
    const newPageData = {
        title: req.body.title,
        intro: req.body.intro
    }
    const topicId = parseInt(req.body.topic);

    await db.transaction(async (trx) => {
        try {
            const newPage = await trx('pages').insert(newPageData).returning('id');
            await trx('pages_topics').insert({
                page_id: newPage[0].id,
                topic_id: topicId
            });

        } catch (error) {
            console.error(error);
            throw error;
        }
    });

    res.redirect('/pages');
};

const updatePage = async (req, res, next) => {
    const pageId = req.params.pageId;
    const topicId = parseInt(req.body.topic);
    const foundPage = await db('pages').where({ id: pageId }).first();
    const updatedPageData = {
        title: req.body.title,
        intro: req.body.intro
    }
    const updatedPage = { ...foundPage, ...updatedPageData };
    
    await db.transaction(async (trx) => {
        try {
            await db('pages').where('id', pageId).update(updatedPage);
            await trx('pages_topics').where('page_id', pageId).del();
            await trx('pages_topics').insert({
                page_id: pageId,
                topic_id: topicId
            });

        } catch (error) {
            console.error(error);
            throw error;
        }
    });

    res.redirect('/pages');
};

const deletePage = async (req, res, next) => {
    const pageId = req.params.pageId;

    await db.transaction(async (trx) => {
        try {
            await trx('pages_topics').where('page_id', pageId).del();
            await trx('pages').where('id', pageId).del();
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
    updatePage,
    deletePage
};



