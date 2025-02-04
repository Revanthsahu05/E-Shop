# 🛍️ E-Shop: A Full-Stack E-Commerce Platform

E-Shop is a feature-rich, full-stack e-commerce application built using **Node.js**, **Express.js**, **MongoDB**, and **EJS**. It provides a seamless shopping experience with functionalities like user authentication, product management, cart operations, and order placement.

---

## 🚀 Features

### User-Focused Features:
- **User Authentication**: Secure registration and login using JWT and hashed passwords.
- **Product Browsing**: View all available products with dynamic filtering and sorting options.
- **Shopping Cart**: Add products to the cart and view price breakdowns, including discounts.
- **Order Placement**: Complete purchases with a streamlined checkout process.

### Admin-Focused Features:
- **Admin Dashboard**: Create, update, and delete products directly from the admin panel.
- **Product Management**: Upload product images, set prices, discounts, and customize product appearance (e.g., background color).

### General Features:
- **Responsive Design**: Built with TailwindCSS for a modern and responsive UI.
- **Flash Messages**: Real-time feedback for user actions (e.g., successful login or product creation).
- **Secure API**: Middleware to ensure only authenticated users can access certain routes.

---

## 🛠️ Tech Stack

### Backend:
- **Node.js**: JavaScript runtime for server-side development.
- **Express.js**: Web framework for building RESTful APIs.
- **MongoDB**: NoSQL database for storing user and product data.
- **Mongoose**: ODM for MongoDB to manage schemas and models.

### Frontend:
- **EJS (Embedded JavaScript)**: Templating engine for dynamic HTML generation.
- **TailwindCSS**: Utility-first CSS framework for styling.

### Additional Tools:
- **JWT (JSON Web Tokens)**: Secure user authentication.
- **Multer**: File upload handling for product images.
- **Bcrypt**: Password hashing for secure storage.
- **Connect Flash**: Flash messages for user feedback.

---

## 📂 Directory Structure
revanthsahu05-e-shop/
├── App.js # Entry point of the application
├── config/ # Configuration files (e.g., MongoDB connection)
├── controllers/ # Business logic (e.g., authentication)
├── middlewares/ # Custom middleware (e.g., authentication checks)
├── models/ # Database schemas (e.g., users, products)
├── public/ # Static assets (e.g., images, stylesheets)
├── routes/ # API routes
├── utils/ # Utility functions (e.g., token generation)
└── views/ # EJS templates for frontend
