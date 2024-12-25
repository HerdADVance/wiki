
// Imports
const express = require('express');
const path = require('path');
const cors = require('./middleware/cors.js');
const responseHeaders = require('./middleware/responseHeaders.js');
const logger = require('./middleware/logger.js');
const session = require('./middleware/session.js');
const globals = require('./middleware/globals.js');
const notFound = require('./middleware/notFound.js');
const errorHandler = require('./middleware/error.js');

// Route Imports
const authRoutes = require('./routes/auth.js');
const mainRoutes = require('./routes/main.js');
const topicsRoutes = require('./routes/topics.js');
const pagesRoutes = require('./routes/pages.js');

// Port variable
const port = process.env.PORT || 8000;

// Create app
const app = express();


// Static Server setup
app.use(express.static(path.join(__dirname, 'public')));

// Middleware
app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(cors);
app.use(responseHeaders);
app.use(logger);
app.use(session);
const passport = require('./middleware/passport.js');
app.use(passport.initialize());
app.use(passport.session());
app.use(globals);


// Routes
app.use('/', mainRoutes);
app.use('/', authRoutes);
app.use('/topics', topicsRoutes);
app.use('/pages', pagesRoutes);


// Error Handlers
app.use(notFound)
app.use(errorHandler);


// Start server
app.listen(port, () => console.log(`Server running on port ${port}`));

