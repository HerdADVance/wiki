const express = require('express');
const router = express.Router();

const { 
	getPages,
	getPage,
	createPage,
	updatePage,
	deletePage
} = require('../controllers/pagesController.js');


router.get('/', getPages);
router.get('/:pageId', getPage);
router.post('/create', createPage);
router.post('/update/:pageId', updatePage);
router.post('/delete/:pageId', deletePage);


module.exports = router;
