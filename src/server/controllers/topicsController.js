
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

const searchTopics = async(req, res, next) => {
  //const topics = await db('topics');
  
  const topics = await db('topics')
    .select('*')
    .orderByRaw("similarity(title::text, ?) DESC", [req.body.input])
    .limit(req.body.limit);
  
  return res.status(200).json({results: topics});
};

const createTopic = async (req, res, next) => {
  try {
    const newTopic = await db('topics').insert({
        title: req.body.title
    }); 
    return res.status(200).json({message: 'Topics created'});
  } catch (error) {
    return res.status(401).json({message: 'Topics failed'});
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
  searchTopics,
  createTopic,
  updateTopic,
  deleteTopic
};



