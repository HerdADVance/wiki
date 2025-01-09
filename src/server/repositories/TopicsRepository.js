const db = require('../config/database.js');

class TopicsRepository {
	
	static async create(topic){
		const newTopicData = {
			title: topic.title
		};

		const [newTopic] = await db('topics').insert(topic).returning('id');
		return newTopic;
	}

	static async findById(id){
		try{
			const foundTopic = await db('topics').where({ id }).select('title').first();
			return foundTopic;
		} catch(error) {
			throw error;
		}
	}
}

module.exports = TopicsRepository;
