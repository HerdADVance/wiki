
// Imports
const express = require('express');
const path = require('path');
const nunjucks = require('nunjucks');
const errorHandler = require('./middleware/error.js');
const logger = require('./middleware/logger.js');
const notFound = require('./middleware/notFound.js');
const mainRoutes = require('./routes/main.js');

// Port variable
const port = process.env.PORT || 8000;

// Create app
const app = express();

// EJS in views directory
// app.set('view engine', 'ejs');
// app.set('views', path.join(__dirname, 'views'));

// Nunjucks for views
nunjucks.configure('views', {
    autoescape: true,
    express: app
});
app.set('view engine', 'html');

// Static Server setup
app.use(express.static(path.join(__dirname, 'public')));

// Middleware
// == Body parser
app.use(express.json())
app.use(express.urlencoded({extended: false}));
// == Logger
app.use(logger);


// Routes
app.use('/', logger, mainRoutes);


// Error Handler (needs to be below Routes)
app.use(notFound)
app.use(errorHandler);


// Start server
app.listen(port, () => console.log(`Server running on port ${port}`));

