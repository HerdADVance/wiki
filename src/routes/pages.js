const express = require('express');
const router = express.Router();

const { getPages, getPage, createPage } = require('../controllers/pagesController.js');

router.get('/', getPages);
router.get('/:pageId', getPage);
router.post('/create', createPage);


module.exports = router;
