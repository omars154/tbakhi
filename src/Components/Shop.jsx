import React from 'react';
import { Link } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import '../styles/shop.css';

function Shop({ isAuthenticated, onLogout }) {
  return (
    <div>
      <Header isAuthenticated={isAuthenticated} onLogout={onLogout} />
      <main>
        <h1>Our Products</h1>
        <section className="products-container">
          <div className="product">
            <Link to="/shirts">
              <img src="./Photo/shirtslogo.png" alt="Shirts" />
            </Link>
            <h2>Shirts</h2>
            <p>here you will find all the old and retro shirts</p>
          </div>

          <div className="product">
            <Link to="/accessories">
              <img src="./Photo/accessories.png" alt="Accessories" />
            </Link>
            <h2>Accessories</h2>
            <p>Here we have banned accessories from cups, medals and even balls</p>
          </div>

          <div className="product">
            <Link to="/shoes">
              <img src="./Photo/shoeslogo.png" alt="Shoes" />
            </Link>
            <h2>Shoes</h2>
            <p>All new and rare sports shoes are available here</p>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default Shop;