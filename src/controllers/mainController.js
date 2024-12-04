
const db = require('../config/database.js');

// @desc   Show Homepage
// @route  GET /
const showHomepage = async (req, res, next) => {
    //const users = await db('users');
    //res.status(200).json(users);
    res.render('index', { title: 'Home Page', message: 'Welcome to my website!' });
};

const cookieTest = async (req, res, next) => {
    console.log(req.headers.cookie);
    console.log(req.cookies);
    console.log(req.signedCookies.name);
    res.cookie('name', 'value', { maxAge: 600000, signed: true });

    if(req.signedCookies.name && req.signedCookies.name === 'value')
        return res.status(201).send({msg: 'cookie matches'});

    return  res.status(201).send({msg: 'NO COOKIE'});
};

module.exports = {
    showHomepage,
    cookieTest
};



