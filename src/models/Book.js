const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  const Book = sequelize.define('Book', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    title: {
      type: DataTypes.STRING(200),
      allowNull: false,
      validate: {
        notEmpty: {
          msg: 'Title is required'
        },
        len: {
          args: [1, 200],
          msg: 'Title must be between 1 and 200 characters'
        }
      }
    },
    author: {
      type: DataTypes.STRING(100),
      allowNull: false,
      validate: {
        notEmpty: {
          msg: 'Author is required'
        },
        len: {
          args: [1, 100],
          msg: 'Author must be between 1 and 100 characters'
        }
      }
    },
    year: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        notEmpty: {
          msg: 'Year is required'
        },
        isInt: {
          msg: 'Year must be a number'
        },
        min: {
          args: [1000],
          msg: 'Year must be at least 1000'
        },
        max: {
          args: [new Date().getFullYear()],
          msg: `Year cannot be greater than ${new Date().getFullYear()}`
        }
      }
    },
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'users',
        key: 'id'
      }
    }
  }, {
    tableName: 'books',
    timestamps: true
  });

  return Book;
};