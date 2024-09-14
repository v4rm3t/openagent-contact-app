// Description: Main entry point for the API server. This file is responsible for setting up the server, connecting to the database, and defining the routes.

require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const createError = require('http-errors');
const cors = require('cors');

// Set up database connection
const knexfile = require('./knexfile');
const environment = process.env.NODE_ENV || 'development';
const knex = require('knex')(knexfile[environment]);

// Import routes
const contactRoutes = require('./routes/contactRoutes.js');

// Create express app
const app = express();

// Configure Environment Variables
const PORT = process.env.SERVER_PORT || 5000;
const ENVR = process.env.NODE_ENV || 'development';

// Middleware to parse request body
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// Connect to database
app.use((req, res, next) => {
  req.db = knex;
  next();
});

// Enable CORS
app.use(cors());

// Use routes
app.use('/contacts', contactRoutes);

// catch 404 and forward to error handler
app.use((req, res, next) => {
    next(createError(404));
});

// error handler
app.use((err, req, res, next) => {
    res.status(err.status || 500);
    res.json({
        error: {
            message: err.message
        }
    });
});

// Start server
app.listen(PORT, () => {
    // log when in development mode
    (ENVR === 'development') && console.log(`Server started on port ${PORT}`);
});

module.exports = app;

