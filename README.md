Football Shop - React & ASP.NET Core
Your football e-commerce website migrated from PHP to React.js (frontend) and ASP.NET Core (backend).
Project Structure
FootballShop/
├── backend/ # ASP.NET Core Web API
│ ├── Controllers/
│ │ ├── AuthController.cs
│ │ ├── ProductsController.cs
│ │ └── CartController.cs
│ ├── Data/
│ │ └── FootballContext.cs
│ ├── Models/
│ │ └── Models.cs
│ ├── Program.cs
│ └── appsettings.json
│
└── frontend/ # React Application
├── public/
│ └── Photo/ # Your existing images
├── src/
│ ├── components/
│ │ ├── SignUp.js
│ │ ├── SignIn.js
│ │ ├── Home.js
│ │ ├── Shop.js
│ │ ├── Shirts.js
│ │ ├── Shoes.js
│ │ ├── Accessories.js
│ │ ├── Cart.js
│ │ ├── AboutUs.js
│ │ ├── Header.js
│ │ ├── Footer.js
│ │ └── ProductCard.js
│ ├── styles/
│ │ └── styles.css
│ ├── App.js
│ └── index.js
└── package.json
Backend Setup (ASP.NET Core)
Prerequisites

.NET 8.0 SDK or later
MySQL Server (MariaDB)
Your existing football database

Steps

Create the ASP.NET Core Web API project:

bashdotnet new webapi -n FootballShop
cd FootballShop

Install required packages:

bashdotnet add package Microsoft.EntityFrameworkCore
dotnet add package Pomelo.EntityFrameworkCore.MySql
dotnet add package Microsoft.AspNetCore.Session

Update appsettings.json with your database connection string (already provided)
Add all the C# files (Models.cs, FootballContext.cs, Controllers, Program.cs)
Run the backend:

bashdotnet run
The API will run on http://localhost:5000
Frontend Setup (React)
Prerequisites

Node.js (v16 or later)
npm or yarn

Steps

Create React app:

bashnpx create-react-app football-shop-frontend
cd football-shop-frontend

Install dependencies:

bashnpm install react-router-dom axios bootstrap

Copy your Photo folder to the public/ directory
Create the folder structure:

bashmkdir src/components
mkdir src/styles

Add all React components to src/components/
Add the CSS file to src/styles/styles.css
Update src/index.js:

javascriptimport React from 'react';
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import './styles/styles.css';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
<React.StrictMode>
<App />
</React.StrictMode>
);

Run the frontend:

bashnpm start
The React app will run on http://localhost:3000
React Concepts Used
✅ Components: All pages are separate functional components (SignUp, SignIn, Home, Shop, etc.)
✅ Props: Components receive data via props (e.g., isAuthenticated, onLogout, product)
✅ State: Using useState hook to manage component state (form data, cart items, products)
✅ Hooks:

useState - for state management
useEffect - for fetching data on component mount
useNavigate - for programmatic navigation

✅ Router: Using React Router for navigation between pages (BrowserRouter, Routes, Route, Link)
Key Features
Authentication

Sign up with validation
Sign in with session management
Protected routes (Cart page requires login)
Logout functionality

Products

View shirts, shoes, and accessories
Trending products on home page
Add to cart with quantity selection

Shopping Cart

View cart items
Update quantities
Delete items
Calculate total
Checkout (clear cart)

API Endpoints
Auth

POST /api/auth/signup - Register new user
POST /api/auth/signin - Login user
POST /api/auth/logout - Logout user
GET /api/auth/check-session - Check if user is logged in

Products

GET /api/products/shirts - Get all shirts
GET /api/products/shoes - Get all shoes
GET /api/products/accessories - Get all accessories
GET /api/products/trends - Get trending shirts

Cart

GET /api/cart - Get user's cart
POST /api/cart/add - Add item to cart
PUT /api/cart/update/{id} - Update cart item quantity
DELETE /api/cart/delete/{id} - Delete cart item
DELETE /api/cart/clear - Clear entire cart

Database
Use your existing football database with the same structure. No changes needed!
Notes

The design and functionality remain exactly the same as your PHP version
All CSS styles are preserved
Session management works the same way
The code is now using modern React and ASP.NET Core patterns
CORS is configured to allow frontend-backend communication

Troubleshooting

CORS errors: Make sure the backend CORS policy includes your frontend URL
Database connection: Verify your connection string in appsettings.json
Image paths: Ensure the Photo folder is in the public/ directory
Port conflicts: Backend runs on port 5000, frontend on port 3000

Enjoy your new React + ASP.NET Core football shop! ⚽
