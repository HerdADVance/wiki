
const db = require('../config/database.js');
const { validationResult } = require('express-validator');
const PagesRepository = require('../repositories/PagesRepository.js');
const formatErrors = require('../util/formatErrors.js');


const getPages = async (req, res, next) => {
  const pages = await db('pages');
  const topics = await db('topics');
  res.render('pages/pages', { pages: pages, topics: topics });
};

// === GET PAGE ===
const getPage = async (req, res, next) => {
  const pageId = req.params.pageId;
  console.log('getting page ' + pageId);
  //console.log(req.session.passport.user);
  try { 
    const foundPage = await PagesRepository.findById(pageId);
    if(!foundPage) return res.status(401).json({message: "Couldn't find that page in the database"});
    return res.status(200).json({page: foundPage});
  } catch(error) {
    return res.status(401).json({message: "There was a problem accessing the database"});
  }

  // let page = await db('pages').where({ id: pageId }).first();
  // const pageTopics = await db('topics')
  //   .join('pages_topics', 'topics.id', 'pages_topics.topic_id')
  //   .where('pages_topics.page_id', pageId)
  //   .select('topics.*');
  // page.topic = pageTopics[0]
  //const topics = await db('topics');

  //res.render('pages/page', { page: page, topics: topics, hasEditor: true});
  
};


// === CREATE PAGE ===
const createPage = async (req, res, next) => {
  
  // Validate new page, Return validaton error if fails
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({details: formatErrors(errors.array())});
  }

  // Add new page to DB, Return success & new page or error page
  try {
    const newPage = await PagesRepository.create(req.body);
    return res.status(200).json({message: 'New Page created', newPageId: newPage.id});
  } catch (error) {
    console.log(error);
    return res.status(401).json({message: 'There was a problem adding the new page to the database'});
  }
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

