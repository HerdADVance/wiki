
const db = require('../config/database.js');


const getTopics = async (req, res, next) => {
    const topics = await db('topics');
    res.render('topics/topics', { topics: topics });
};

const getTopic = async (req, res, next) => {
    const topicId = req.params.topicId;
    const topic = await db('topics').where({ id: topicId }).first();
    res.render('topics/topic', { topic: topic });
};

const createTopic = async (req, res, next) => {
    try {
        const ids = await db('topics').insert({
            title: req.body.title
        });
        console.log(ids);
        res.redirect('/topics');

    } catch (error) {
        console.log(error)
    }
};

module.exports = {
    getTopics,
    getTopic,
    createTopic,
};



