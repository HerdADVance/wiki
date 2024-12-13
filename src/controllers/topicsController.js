
const db = require('../config/database.js');


const getTopics = async (req, res, next) => {
    const topics = await db('topics');
    console.log(req.user);
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

const updateTopic = async (req, res, next) => {
    const topicId = req.params.topicId;
    const updatedData = {
        title: req.body.title
    };
    const topic = await db('topics').where({ id: topicId }).first();
    const updatedTopic = { ...topic, ...updatedData };
    const updatedRow = await db('topics').where('id', topicId).update(updatedTopic);
    console.log(updatedRow);
    res.redirect('/topics/' + topicId);
};

const deleteTopic = async (req, res, next) => {
    const topicId = req.params.topicId;
    await db('topics').where('id', topicId).del();
    res.redirect('/topics');
};

module.exports = {
    getTopics,
    getTopic,
    createTopic,
    updateTopic,
    deleteTopic
};



