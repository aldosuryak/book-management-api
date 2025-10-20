📚 Book Management API

RESTful API untuk manajemen buku dengan autentikasi JWT, dibangun menggunakan Node.js, Express, Sequelize, dan PostgreSQL.

🚀 **Fitur**

✅ CRUD lengkap untuk manajemen buku
🔐 Autentikasi & Autorisasi dengan JWT
🔍 Filter pencarian buku (title, author, year)
✔️ Validasi input yang ketat
📝 Custom middleware untuk logging
🗄️ PostgreSQL database dengan Sequelize ORM
🏗️ Struktur folder modular dan clean architecture

📋 **Prasyarat**
Pastikan Anda sudah menginstall:

Node.js (v14 atau lebih baru)
PostgreSQL (v12 atau lebih baru)
npm atau yarn

🛠️ Instalasi
1. Clone Repository
2. git clone <repository-url>
cd book-management-api
3. Install Dependencies
npm install

Dependencies yang akan terinstall:

express - Web framework
sequelize - ORM untuk PostgreSQL
pg & pg-hstore - PostgreSQL driver
jsonwebtoken - JWT authentication
bcryptjs - Password hashing
express-validator - Input validation
dotenv - Environment variables
nodemon - Development auto-reload (dev dependency)

3. Setup Database PostgreSQL
   
Buka PostgreSQL dan buat database baru:
sqlCREATE DATABASE book_management;
Atau via terminal:
bashpsql -U postgres
CREATE DATABASE book_management;
\q

4. Konfigurasi Environment Variables
   
Buat file .env di root folder:
env# Server Configuration
PORT=4000
NODE_ENV=development

# Database Configuration
DB_HOST=localhost
DB_USER=postgres
DB_PASSWORD=your_password_here
DB_NAME=book_management
DB_PORT=5432

# JWT Configuration
JWT_SECRET=your_super_secret_jwt_key_change_this_in_production


🎯 Menjalankan Aplikasi
Development Mode:
npm run dev
Production Mode
npm start
Server akan berjalan di: http://localhost:4000
