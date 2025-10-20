require('dotenv').config();
const app = require('./src/app');
const { sequelize } = require('./src/models');

const PORT = process.env.PORT || 4000;

// Sync database dan start server
sequelize.sync({ force: false }).then(() => {
  console.log('Database connected and synced');
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
    console.log(`API: http://localhost:${PORT}/api`);
  });
}).catch(err => {
  console.error('Database connection failed:', err);
});