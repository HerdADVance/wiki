const express = require('express');
const router = express.Router();
const { isAuthenticated } = require('../middleware/auth.js');

const { 
	getTopics, 
	getTopic,
	searchTopics,
	createTopic,
	updateTopic,
	deleteTopic
} = require('../controllers/topicsController.js');


router.get('/', isAuthenticated, getTopics);
router.get('/:topicId', getTopic);
router.post('/search', searchTopics);
router.post('/create', createTopic);
router.post('/update/:topicId', updateTopic);
router.post('/delete/:topicId', deleteTopic);


module.exports = router;
