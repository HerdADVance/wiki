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
			const foundPage = await db('pages').where({ id }).select('title').first();
			return foundPage;
		} catch(error) {
			throw error;
		}
	}
}

module.exports = PagesRepository;
