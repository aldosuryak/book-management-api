# 📚 Book Management API

RESTful API untuk manajemen buku dengan autentikasi JWT, dibangun menggunakan **Node.js**, **Express**, **Sequelize**, dan **PostgreSQL**.

---

## 🚀 Fitur

- ✅ CRUD lengkap untuk manajemen buku  
- 🔐 Autentikasi & Autorisasi dengan JWT  
- 🔍 Filter pencarian buku (title, author, year)  
- ✔️ Validasi input yang ketat  
- 📝 Custom middleware untuk logging  
- 🗄️ Database PostgreSQL dengan Sequelize ORM  
- 🏗️ Struktur folder modular dan clean architecture  

---

## 📋 Prasyarat

Pastikan Anda sudah menginstal:

- [Node.js](https://nodejs.org/) (v14 atau lebih baru)  
- [PostgreSQL](https://www.postgresql.org/) (v12 atau lebih baru)  
- npm atau yarn

---

## 🛠️ Instalasi

### 1️⃣ Clone Repository

```bash
git clone https://github.com/aldosuryak/book-management-api.git
cd book-management-api
```

### 2️⃣ Install Dependencies

```bash
npm install
```

atau 

```bash
yarn install
```

### 3️⃣ Setup Database PostgreSQL

Buka PostgreSQL dan buat database baru:
```sql
CREATE DATABASE book_management;
```

Atau melalui terminal:
```bash
psql -U postgres
CREATE DATABASE book_management;
\q
```

### 4️⃣ Konfigurasi Environment Variables

Buat file .env berdasarkan contoh yang sudah disediakan:
```bash
cp .env.example .env
```
Kemudian buka file .env dan sesuaikan nilainya dengan konfigurasi lokal Anda.

---

## 🎯 Menjalankan Aplikasi

Development Mode
```bash
npm run dev
```

Production Mode
```bash
npm start
```

Server akan berjalan di:

http://localhost:4000

