
// Imports
const express = require('express');
const path = require('path');
const nunjucks = require('nunjucks');
const cookieParser = require('cookie-parser');
const errorHandler = require('./middleware/error.js');
const logger = require('./middleware/logger.js');
const notFound = require('./middleware/notFound.js');
const session = require('express-session');
const passport = require('passport');
const mainRoutes = require('./routes/main.js');
const topicsRoutes = require('./routes/topics.js');
const pagesRoutes = require('./routes/pages.js');

// Port variable
const port = process.env.PORT || 8000;

// Create app
const app = express();

// EJS in views directory
// app.set('view engine', 'ejs');
// app.set('views', path.join(__dirname, 'views'));

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
// -- Cookie parser
app.use(cookieParser("secretkey"));
// -- Body parser
app.use(express.json())
app.use(express.urlencoded({extended: false}));
// -- Logger
app.use(logger);
// -- Express Session
// app.use(session({
//     secret: 'get a better secret key',
//     saveUninitialized: false,
//     resave: false,
//     cookie: {
//         maxAge: 60000 * 60 * 24 * 7 // 1 week
//     }
//     // store: {

//     // }
// }));
// -- Passport
// app.use(passport.initialize());
// app.use(passport.session());


// Routes
app.use('/', mainRoutes);
app.use('/topics', topicsRoutes);
app.use('/pages', pagesRoutes);


// Error Handler (needs to be below Routes)
app.use(notFound)
app.use(errorHandler);


// Start server
app.listen(port, () => console.log(`Server running on port ${port}`));

