const db = require('../config/database.js');

class PagesTopicsRepository {
	
	static async associate(pageId, topicId){
		try{
			// Return error if association already exists
			const existingRow = await db('pages_topics').where({ page_id: pageId, topic_id: topicId }).first();
			if(existingRow) return { error: "That topic is already associated with this page" };

			// Add row to table & return success message
			await db('pages_topics').insert({
				page_id: pageId,
				topic_id: topicId
			});
			return { message: "Topic successfully added to page" }

		} catch(error){
			console.error(error);
			return { error: "There was a problem adding that topic to the page" };
		}
	}

}

module.exports = PagesTopicsRepository;
