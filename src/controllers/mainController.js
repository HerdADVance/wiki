
const db = require('../config/database.js');

// @desc   Show Homepage
// @route  GET /
const showHomepage = async (req, res, next) => {
    //const users = await db('users');
    //res.status(200).json(users);
    res.render('index', { title: 'Home Page', message: 'Welcome to my website!' });
};


const sessionTest = async (req, res, next) => {
    console.log(req.session);
    console.log(req.session.id);
    req.session.visited = true;
    //res.cookie('cookiename', 'cookievalue', { maxAge: 600000, signed: true });
    // if(req.signedCookies.name && req.signedCookies.name === 'value')
    //     return res.status(201).send({msg: 'cookie matches'});
    return res.status(201).send({msg: 'Session Test'});
};

const sessionTwoTest = async (req, res, next) => {
    console.log(req.session);
    console.log(req.session.id);
    req.sessionStore.get(req.session.id, (err, sessionData) => {
        if (err) {
            console.log(err);
            throw err;
        }
    });
    return res.status(201).send({msg: 'Session 2 Test'});
};

const sessionUserTest = async (req, res, next) => {
    const users = [
        { username: 'alex', password: 'vance'},
        { username: 'alex2', password: 'vance2'},
        { username: 'alex3', password: 'vance3'}
    ]

    req.sessionStore.get(req.session.id, (err, sessionData) => {
        console.log(sessionData);
    });
    
    req.session.user = users[2];
    return res.status(201).send(users[2]);
};

const passportTest = async (req, res, next) => {
    const users = [
        { username: 'alex', password: 'vance'},
        { username: 'alex2', password: 'vance2'},
        { username: 'alex3', password: 'vance3'}
    ]

    req.sessionStore.get(req.session.id, (err, sessionData) => {
        console.log(sessionData);
    });
    
    req.session.user = users[2];
    return res.status(201).send(users[2]);
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
    sessionTest,
    sessionTwoTest,
    sessionUserTest,
    passportTest,
    cookieTest
};



