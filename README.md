# 🌠 Zhumell Shop – Astronomy E-Commerce Frontend

This is the **frontend** of Zhumell Shop, a simulated e-commerce platform for astronomy enthusiasts. The application offers a clean UI, authentication, product browsing, commenting, and a test checkout using Stripe. Built with **React**, **Vite**, **Tailwind CSS**, and **React Router**.

---

## 🧪 Live Demo

🌐 [Live Frontend on Vercel](https://zhumell-shop.vercel.app) (It may take a while to load the products, as this is a test site with a cold start.)

🔗 [Backend Repo (Node.js + MongoDB)](https://github.com/AlbertDevtrus/zhumell-page-backend)

---

## 🛠️ Tech Stack

- **React 18** with React Router
- **Vite** for fast bundling
- **Tailwind CSS** + `tailwindcss-animated`
- **Axios** for API communication
- **React Toastify** for notifications
- **JWT Auth** via custom hooks and context

---

## 📁 Folder Structure

src/
│
├── components/ # Reusable UI components (Modal, Gallery, Product, etc.)
├── config/ # Axios config
├── context/ # AuthProvider and context setup
├── hooks/ # Custom React hooks (auth, intersection observer)
├── layouts/ # Shared layout components
├── pages/ # Application routes (Landing, Login, Shop, etc.)
├── App.jsx # Main router setup
└── main.jsx # React entry point

---

## 🔐 Features

- JWT-based login and register pages
- Route protection with context
- Dynamic product pages
- Category filtering
- Toast notifications
- Stripe integration (test mode only)
- Comment system

---

## 🧭 Available Pages

- `/` – Landing page
- `/login` – Login form
![Login page](/screenshots/login-page.png)
- `/register` – Signup form
- `/catalog` – All products
![Product grid](/screenshots/product-grid.png)
- `/catalog/:type` – Filter by product type (telescopes, binoculars, accessories)
- `/product/:id` – Individual product page with comments
![Product](/screenshots/product-page.png)
- `/shop` – Shopping cart
![Product](/screenshots/shopping-cart.png)
- `/success` – Payment success page

---

## 🧑‍💻 Getting Started

```bash
# Clone the repository
git clone https://github.com/yourusername/zhumell-shop-frontend.git
cd zhumell-shop-frontend

# Install dependencies
pnpm install

# Start the development server
pnpm dev
```

## 🧪 To test checkout flow

You’ll need the backend running with environment variables configured, especially FRONTEND_URL and Stripe keys.
You can test Stripe with test cards like 4242 4242 4242 4242.

## 💡 Highlights

This project was built to:

- Practice real-world app structure in React
- Combine frontend routing, context, and custom hooks
- Work with backend APIs (products, comments, orders)
- Practice integrating Stripe in a real-world flow
- Prepare a full-stack portfolio project using modern tools

## 👨‍💻 Author

Luis Alberto Guzmán Bautista
[LinkedIn](https://www.linkedin.com/in/luis-guzman-bautista/) · [Portfolio](https://luis-alberto.vercel.app/) · [GitHub](https://github.com/AlbertDevtrus)  