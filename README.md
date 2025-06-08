# 📝 MERN Practice

A practice project using the **MERN Stack** (MongoDB, Express, React, Node.js) with **user authentication** and **CRUD operations** for notes.

> This is my learning project I built to practice full-stack development using the MERN stack.
> following Codesistency (YouTube) channel and improving in auth From Indonesian Youtube Channel

### 🎥 YouTube Resources

- [Codesistency – MERN Course](https://youtu.be/Ea9rrRj9e0Y?si=hFBK7IT24ri88lib)
- [Prawito Hudoro – JWT Authentication](https://youtu.be/Nfg-l-syLsA?si=Z4LHSV3VeuFL7Ugh)
- [VoidFnc – Auth & Hashing](https://youtu.be/RTI2hyWuACM?si=WSAq1XVDAUZBFE09)

---

## 🚀 Features

- 🔐 User Authentication (Register & Login)
- 🗒️ Create, Read, Update, Delete Notes
- 🔄 Protected Routes using JWT
- 📦 Persistent login using `localStorage`

---

## 🧰 Tech Stack

### Frontend

- **React.js** (with **Vite**)
- **React Router**
- **Axios** – for API requests
- **React Hot Toast** – for notifications
- **Lucide React** – for icons
- **DaisyUI** – TailwindCSS-based UI components

### Backend

- **Node.js** & **Express**
- **MongoDB** & **Mongoose**
- **bcrypt** – to hash passwords securely
- **jsonwebtoken (JWT)** – for token-based authentication
- **Upstash Rate Limiter** – (optional)
- **Nodemon** – auto-reload server during development

---

## 🛠️ Installation

### 📦 Backend

```bash
# Navigate to backend folder
cd backend

# Install dependencies
npm install

# Create a .env file with the following:
MONGODB_URI=your_mongodb_uri
JWT_SECRET=your_jwt_secret
PORT=5001

# Start the backend server
npm run dev

### Frontend


# Navigate to frontend folder
cd frontend

# Install dependencies
npm install

# Start the development server
npm run dev
```
