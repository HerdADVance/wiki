const db = require('../config/database.js');

class PagesRepository {
	
	static async create(page){
		const newPageData = {
			title: page.title
		};

		const [newPage] = await db('pages').insert(page).returning('id');
		return newPage;
	}

	static async findById(id){
		try{
			const foundPage = await db('pages').where({ id }).select(['id', 'title']).first();
			return foundPage;
		} catch(error) {
			throw error;
		}
	}

	static async getPage(pageId){
		try{
			const page = await db('pages')
				.select('pages.id', 'pages.title')
			  .select(db.raw('COALESCE(json_agg(json_build_object(\'id\', topics.id, \'title\', topics.title)) FILTER (WHERE topics.id IS NOT NULL), \'[]\') as topics'))
			  //.select(db.raw('COALESCE(json_agg(DISTINCT jsonb_build_object(\'id\', topics.id, \'title\', topics.title)) FILTER (WHERE topics.id IS NOT NULL), \'[]\') as topics'))
	  		//.select(db.raw('COALESCE(json_agg(DISTINCT jsonb_build_object(\'id\', sessions.id, \'name\', sessions.name)) FILTER (WHERE sessions.id IS NOT NULL), \'[]\') as sessions'))
			  .leftJoin('pages_topics', 'pages.id', 'pages_topics.page_id')
			  .leftJoin('topics', 'pages_topics.topic_id', 'topics.id')
			  //.leftJoin('pages_sessions', 'pages.id', 'pages_sessions.page_id')
	  		//.leftJoin('sessions', 'pages_sessions.session_id', 'sessions.id')
			  .where('pages.id', pageId)
			  .groupBy('pages.id')
			  .first();
	  	if(page) return { data: page }
	  	else return { error: "This page couldn't be found" }
	  
	  } catch(err) {
	  	console.log(err)
	  	return { error: "There was a problem retrieving this page from the database" }
	  }

	}

}

module.exports = PagesRepository;
