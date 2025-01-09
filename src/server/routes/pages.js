const express = require('express');
const router = express.Router();

const { 
	getPages,
	getPage,
	createPage,
	updatePage,
	deletePage
} = require('../controllers/pagesController.js');

// Validators
const PagesValidator = require('../validators/PagesValidator.js');


// Routes
//router.get('/', getPages);
router.get('/:pageId', getPage);
router.post('/create', PagesValidator.create(), createPage);
//router.post('/update/:pageId', updatePage);
//router.post('/delete/:pageId', deletePage);


module.exports = router;
