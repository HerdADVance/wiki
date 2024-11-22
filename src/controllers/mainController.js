
// let posts = [
// 	{id: 1, title: 'Post 1'},
// 	{id: 2, title: 'Post 2'},
// 	{id: 3, title: 'Post 33'}
// ];

import pool from '../config/connection.js';

// @desc   Show Homepage
// @route  GET /
export const showHomepage = async (req, res, next) => {
	const users = await pool.query('SELECT * FROM users');
	res.status(200).json(users.rows);
};




