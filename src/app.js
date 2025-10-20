const express = require('express');
const authRoutes = require('./routes/authRoutes');
const bookRoutes = require('./routes/bookRoutes');
const logger = require('./middleware/logger');

const app = express();

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(logger); // Custom logging middleware

// Routes
app.get('/', (req, res) => {
  res.json({
    message: 'Book Management API',
    version: '1.0.0',
    endpoints: {
      auth: '/api/auth',
      books: '/api/books'
    }
  });
});

app.use('/api/auth', authRoutes);
app.use('/api/books', bookRoutes);

// 404 Handler
app.use((req, res) => {
  res.status(404).json({
    success: false,
    message: 'Endpoint not found'
  });
});

// Error Handler
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(err.status || 500).json({
    success: false,
    message: err.message || 'Internal server error'
  });
});

module.exports = app;