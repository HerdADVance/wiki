const express = require('express');
const router = express.Router();

const { 
	getTopics, 
	getTopic, 
	createTopic,
	updateTopic,
	deleteTopic
} = require('../controllers/topicsController.js');


router.get('/', getTopics);
router.get('/:topicId', getTopic);
router.post('/create', createTopic);
router.post('/update/:topicId', updateTopic);
router.post('/delete/:topicId', deleteTopic);


module.exports = router;
