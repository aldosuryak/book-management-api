const { Sequelize } = require('sequelize');
const config = require('../config/database');

const env = process.env.NODE_ENV || 'development';
const dbConfig = config[env];

const sequelize = new Sequelize(
  dbConfig.database,
  dbConfig.username,
  dbConfig.password,
  {
    host: dbConfig.host,
    port: dbConfig.port,
    dialect: dbConfig.dialect,
    logging: dbConfig.logging
  }
);

const User = require('./User')(sequelize);
const Book = require('./Book')(sequelize);

// Associations
Book.belongsTo(User, { foreignKey: 'userId', as: 'creator' });
User.hasMany(Book, { foreignKey: 'userId', as: 'books' });

module.exports = {
  sequelize,
  User,
  Book
};