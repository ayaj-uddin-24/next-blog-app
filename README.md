# 📝 Full Stack Blog Website

A fully functional, production-ready **full-stack blog platform** built using **Next.js**, **Node.js**, **Express.js**, and **MongoDB**.  
The application supports dynamic content management, and a responsive, modern UI — offering a seamless blogging experience for both creators and readers.

---

## 📌 Project Overview

This project delivers a complete blogging solution with end-to-end functionality.  
Users can:

- 📝 Create, edit, and delete blog posts
- 📚 View all published posts
- 🔍 Explore detailed content on individual post pages

Designed with clean architecture, reusable components, and a mobile-first UI.

---

## 🌐 Tech Stack

| Technology       | Purpose                                      |
| ---------------- | -------------------------------------------- |
| **Next.js**      | Frontend rendering, routing & UI development |
| **Node.js**      | Server-side JavaScript runtime               |
| **Express.js**   | Backend framework for RESTful APIs           |
| **MongoDB**      | NoSQL database for storing posts & users     |
| **Mongoose**     | ODM for MongoDB models                       |
| **Tailwind CSS** | Utility-first styling for a modern UI        |
| **bcrypt**       | Password hashing for user security           |

---

## 🚀 Core Features

- ✔️ Create, Update & Delete Blog Posts
- ✔️ Rich Text Formatting for Content
- ✔️ Fully Responsive Design (Mobile, Tablet & Desktop)
- ✔️ Structured REST API Endpoints
- ✔️ Reusable, modular components
- ✔️ SEO-friendly Next.js pages

---

## ⚙️ Installation & Setup

### 1️⃣ Clone the repository

```bash
git clone https://github.com/ayaj-uddin-24/next-blog-app
cd next-blog-app
```

### 2️⃣ Install Dependencies

```bash
npm install
```

### 3️⃣ Setup Environment Variables

Create a `.env.local` file in the root and add:

```env
MONGODB_URI=your_mongo_connection_string
```

### 4️⃣ Start the Development Server

```bash
npm run dev
```

The app will be running on: `http://localhost:3000`

---

## 🧪 API Endpoints Overview

| Method | Endpoint         | Description        |
| ------ | ---------------- | ------------------ |
| GET    | `/api/posts`     | Get all blog posts |
| POST   | `/api/posts`     | Create new post    |
| PUT    | `/api/posts/:id` | Edit post          |
| DELETE | `/api/posts/:id` | Delete post        |

---

## 📄 Folder Structure

```
next-blog-app/
├── app/
│   ├── admin/
│   ├── api/
│   ├── blog/[id]
├── assets/
├── components/
│   ├── admin/
│   ├── client/
├── lib/
│   └── config/
│   └── models/
├── .env.local
├── tailwind.config.js
├── next.config.js
```

---

## ✅ Learning Outcomes

- Built a **full-stack MERN-style** app using Next.js and Express.js
- Learned integration between **frontend (Next.js)** and **backend (Express + MongoDB)**
- Practiced **RESTful API** design
- Used **Tailwind CSS** for responsive and clean UI components

---

_**- Created By Ayaj Uddin Tanif (Full Stack Web Developer)**_
