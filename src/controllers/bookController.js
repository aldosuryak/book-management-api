const { Book, User } = require('../models');
const { Op } = require('sequelize');

const bookController = {
  // Create new book
  async create(req, res) {
    try {
      const { title, author, year } = req.body;
      const userId = req.user.id;

      const book = await Book.create({
        title,
        author,
        year,
        userId
      });

      res.status(201).json({
        success: true,
        message: 'Book created successfully',
        data: book
      });
    } catch (error) {
      console.error('Create book error:', error);
      res.status(500).json({
        success: false,
        message: 'Error creating book',
        error: error.message
      });
    }
  },

  // Get all books with filters
  async getAll(req, res) {
    try {
      const { title, author, year } = req.query;
      
      // Build where clause for filters
      const where = {};
      
      if (title) {
        where.title = { [Op.iLike]: `%${title}%` };
      }
      
      if (author) {
        where.author = { [Op.iLike]: `%${author}%` };
      }
      
      if (year) {
        where.year = parseInt(year);
      }

      const books = await Book.findAll({
        where,
        include: [{
          model: User,
          as: 'creator',
          attributes: ['id', 'username', 'email']
        }],
        order: [['createdAt', 'DESC']]
      });

      res.json({
        success: true,
        message: 'Books retrieved successfully',
        count: books.length,
        data: books
      });
    } catch (error) {
      console.error('Get books error:', error);
      res.status(500).json({
        success: false,
        message: 'Error retrieving books',
        error: error.message
      });
    }
  },

  // Get book by ID
  async getById(req, res) {
    try {
      const { id } = req.params;

      const book = await Book.findByPk(id, {
        include: [{
          model: User,
          as: 'creator',
          attributes: ['id', 'username', 'email']
        }]
      });

      if (!book) {
        return res.status(404).json({
          success: false,
          message: 'Book not found'
        });
      }

      res.json({
        success: true,
        message: 'Book retrieved successfully',
        data: book
      });
    } catch (error) {
      console.error('Get book error:', error);
      res.status(500).json({
        success: false,
        message: 'Error retrieving book',
        error: error.message
      });
    }
  },

  // Update book
  async update(req, res) {
    try {
      const { id } = req.params;
      const { title, author, year } = req.body;

      const book = await Book.findByPk(id);

      if (!book) {
        return res.status(404).json({
          success: false,
          message: 'Book not found'
        });
      }

      // Update book
      await book.update({
        title: title || book.title,
        author: author || book.author,
        year: year || book.year
      });

      res.json({
        success: true,
        message: 'Book updated successfully',
        data: book
      });
    } catch (error) {
      console.error('Update book error:', error);
      res.status(500).json({
        success: false,
        message: 'Error updating book',
        error: error.message
      });
    }
  },

  // Delete book
  async delete(req, res) {
    try {
      const { id } = req.params;

      const book = await Book.findByPk(id);

      if (!book) {
        return res.status(404).json({
          success: false,
          message: 'Book not found'
        });
      }

      await book.destroy();

      res.json({
        success: true,
        message: 'Book deleted successfully'
      });
    } catch (error) {
      console.error('Delete book error:', error);
      res.status(500).json({
        success: false,
        message: 'Error deleting book',
        error: error.message
      });
    }
  }
};

module.exports = bookController;