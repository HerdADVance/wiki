
let posts = [
	{id: 1, title: 'Post 1'},
	{id: 2, title: 'Post 2'},
	{id: 3, title: 'Post 33'}
];

// @desc   Show Homepage
// @route  GET /
export const showHomepage = (req, res, next) => {
	res.status(200).json(posts);
};




