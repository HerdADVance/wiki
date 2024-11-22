
// Imports
import express from 'express';
import path from 'path';
import errorHandler from './middleware/error.js';
import logger from './middleware/logger.js';
import notFound from './middleware/notFound.js';
import mainRoutes from './routes/main.js';
import pool from './config/connection.js';

// Port variable
const port = process.env.PORT || 8000;

// Create app
const app = express();


// Static Server setup (only need bottom line if using Common JS)
import { fileURLToPath } from 'url';
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
app.use(express.static(path.join(__dirname, 'public')));


// Database connection
// async function connectToDatabase() {
//     try {
//         await pool.connect();
//         console.log('Connected to PostgreSQL database');
//     } catch (err) {
//         console.error('Connection error', err.stack);
//     }
// }
// await connectToDatabase();


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


// Sync the database w/ Sequelize and start the server (NOT USING)
// sequelize.sync({ force: false })
//   .then(() => {
//     console.log('Database synced successfully');
//     app.listen(port, () => {
//       console.log(`Server running on port ${port}`);
//     });
//   })
//   .catch((error) => {
//     console.error('Error syncing database:', error);
//   });

