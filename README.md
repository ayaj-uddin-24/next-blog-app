# 📝 Full Stack Blog Website

A modern full-stack **blog website** built using **Next.js**, **Node.js**, **Express.js**, and **MongoDB**. It features user authentication, post creation/editing, and a responsive UI — perfect for publishing and managing blog content.

---

## 👥 Team Details

### 👨‍💼 Project Leader

- **Name:** Ayaj Uddin
- **Role:** Full Stack Developer & Project Lead

### 🧑‍🤝‍🧑 Team Members

| Name          | Role                          |
| ------------- | ----------------------------- |
| Ayaj Uddin    | Leader, Frontend & Backend    |
| Member 2 Name | UI/UX Design, Testing         |
| Member 3 Name | MongoDB Integration, Security |

---

## 📌 Project Description

This project is a fully functional blogging platform where users can:

- 🔐 Register and log in
- 📝 Create, edit, and delete blog posts
- 📖 Browse all published posts
- 🔍 View detailed content on single-post pages

---

## 🌐 Tech Stack

| Technology       | Description                            |
| ---------------- | -------------------------------------- |
| **Next.js**      | React-based frontend framework         |
| **Node.js**      | JavaScript runtime for the server      |
| **Express.js**   | Lightweight backend framework          |
| **MongoDB**      | NoSQL database for blog data and users |
| **Mongoose**     | ODM for MongoDB                        |
| **Tailwind CSS** | Modern utility-first CSS framework     |
| **JWT**          | JSON Web Tokens for authentication     |

---

## 🚀 Features

- ✅ User Registration & Login (JWT-based)
- ✅ Create, Edit, and Delete Blog Posts
- ✅ Rich text formatting (Markdown or WYSIWYG optional)
- ✅ Responsive design (mobile-friendly)
- ✅ Secure password hashing with bcrypt
- ✅ RESTful API endpoints with Express.js
- ✅ Clean and reusable component-based UI

---

## 📸 Screenshots

> _(Add screenshots of the homepage, login page, and blog post editor here)_

---

## ⚙️ Installation & Run Instructions

### 1️⃣ Clone the Repository

```bash
git clone https://github.com/yourusername/blog-website.git
cd blog-website
```

### 2️⃣ Install Dependencies

```bash
npm install
```

### 3️⃣ Setup Environment Variables

Create a `.env.local` file in the root and add:

```env
MONGODB_URI=your_mongo_connection_string
JWT_SECRET=your_jwt_secret
```

### 4️⃣ Start the Development Server

```bash
npm run dev
```

The app will be running on:  
📍 `http://localhost:3000`

---

## 🧪 API Endpoints Overview

| Method | Endpoint             | Description            |
| ------ | -------------------- | ---------------------- |
| POST   | `/api/auth/register` | Register a new user    |
| POST   | `/api/auth/login`    | Authenticate user      |
| GET    | `/api/posts`         | Get all blog posts     |
| POST   | `/api/posts`         | Create new post (auth) |
| PUT    | `/api/posts/:id`     | Edit post (auth)       |
| DELETE | `/api/posts/:id`     | Delete post (auth)     |

---

## 📄 Folder Structure

```
blog-website/
├── pages/
│   ├── index.js
│   ├── login.js
│   ├── register.js
│   ├── posts/[id].js
├── components/
│   ├── Header.js
│   ├── PostCard.js
├── models/
│   ├── User.js
│   ├── Post.js
├── api/
│   └── auth/
│       ├── login.js
│       └── register.js
│   └── posts/
│       ├── index.js
│       └── [id].js
├── .env.local
├── tailwind.config.js
├── next.config.js
```

---

## ✅ Learning Outcomes

- Built a **full-stack MERN-style** app using Next.js and Express.js
- Implemented **JWT-based authentication**
- Learned integration between **frontend (Next.js)** and **backend (Express + MongoDB)**
- Practiced **RESTful API** design
- Used **Tailwind CSS** for responsive and clean UI components

---

## 📄 License

This project is developed for **educational purposes** as a college assignment.  
It is free to use and modify for learning and academic projects.

---

## 🙏 Acknowledgments

- Our instructor for project supervision and guidance
- The creators of Next.js, Express, and MongoDB
- The developer community and open-source contributors
- Teammates for effective collaboration and effort

---

## ✨ Final Message

> _“Words matter — but how we deliver them matters more.”_  
> — **Team Blogify** (or your team name)
