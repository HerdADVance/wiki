
// Imports
const express = require('express');
const path = require('path');
const nunjucks = require('nunjucks');
const cookieParser = require('cookie-parser');
const errorHandler = require('./middleware/error.js');
const logger = require('./middleware/logger.js');
const notFound = require('./middleware/notFound.js');
const session = require('express-session');


// Route Imports
const authRoutes = require('./routes/auth.js');
const mainRoutes = require('./routes/main.js');
const topicsRoutes = require('./routes/topics.js');
const pagesRoutes = require('./routes/pages.js');

// Repo Import
const UserRepository = require('./repositories/UserRepository.js');

// Port variable
const port = process.env.PORT || 8000;

// Create app
const app = express();

// Nunjucks for views
nunjucks.configure('src/views', {
    autoescape: true,
    express: app,
    watch: true,
    noCache: true,
});
app.set('view engine', 'njs');

// Static Server setup
app.use(express.static(path.join(__dirname, 'public')));

// Middleware
app.use(express.json())
app.use(express.urlencoded({extended: false}));
app.use(logger);
//app.use(cookieParser("secretkey"));

// Express-Session
app.use(session({
    secret: 'get a better secret key',
    saveUninitialized: false,
    resave: false,
    cookie: {
        maxAge: 60000 * 60 * 24 * 7 // 1 week
    }
    // store: {

    // }
}));

// Passport
const passport = require('./middleware/passport.js');
app.use(passport.initialize());
app.use(passport.session());

// Dynamic globals for Nunjucks
app.use((req, res, next) => {
    res.locals.user = req.user;
    res.locals.currentPath = req.path;
    next();
});

// Auth middleware
function isAuthenticated(req, res, next) {
    if (req.isAuthenticated()) {
        return next();
    }
    res.redirect('/login');
}



// Routes
app.use('/', mainRoutes);
app.use('/', authRoutes);
app.use('/topics', topicsRoutes);
app.use('/pages', pagesRoutes);


// Error Handler (needs to be below Routes)
app.use(notFound)
app.use(errorHandler);


// Start server
app.listen(port, () => console.log(`Server running on port ${port}`));

