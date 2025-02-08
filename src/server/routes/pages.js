const express = require('express');
const router = express.Router();
const { isAdmin } = require('../middleware/auth.js');

const { 
	getPages,
	getPage,
	createPage,
	updatePage,
	deletePage,
	addPageTopic,
	removePageTopic
} = require('../controllers/pagesController.js');

// Validators
const PagesValidator = require('../validators/PagesValidator.js');


// Routes
//router.get('/', getPages);
router.get('/:pageId', getPage);
router.post('/create', PagesValidator.create(), createPage);
//router.post('/update/:pageId', updatePage);
//router.post('/delete/:pageId', deletePage);
router.post('/:pageId/topics/:topicId', isAdmin, addPageTopic);
router.delete('/:pageId/topics/:topicId', isAdmin, removePageTopic);


module.exports = router;
