import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Header from './Header';
import Footer from './Footer';
import ProductCard from './ProductCard';
import '../styles/home.css';

function Home({ isAuthenticated, onLogout }) {
  const [trends, setTrends] = useState([]);

  useEffect(() => {
    fetchTrends();
  }, []);

  const fetchTrends = async () => {
    try {
      const response = await axios.get('/products/trends');
      setTrends(response.data);
    } catch (error) {
      console.error('Error fetching trends:', error);
    }
  };

  const handleAddToCart = async (product, quantity) => {
    try {
      await axios.post('/cart/add', {
        name: product.name,
        price: product.price,
        quantity: quantity,
        image: product.image
      });
      alert('Item has been added to cart!');
    } catch (error) {
      alert(error.response?.data?.message || 'Please sign in first!!');
    }
  };

  return (
    <div>
      <Header isAuthenticated={isAuthenticated} onLogout={onLogout} />
      <main>
        <section id="slider-control">
          <div id="slider">
            <div id="carouselExample" className="carousel slide" data-bs-ride="carousel">
              <div className="carousel-inner">
                <div className="carousel-item active">
                  <img src="Photo/messi.jpg" className="d-block w-100" alt="Lionel Messi" />
                </div>
                <div className="carousel-item">
                  <img src="Photo/4aff02ef127454a6a693508299af4f398b878a1f.jpg.webp" className="d-block w-100" alt="Messi in action" />
                </div>
                <div className="carousel-item">
                  <img src="Photo/messiFCB.jpg" className="d-block w-100" alt="Sergio Ramos" />
                </div>
                <div className="carousel-item">
                  <img src="Photo/real-madrid3row.jpg" className="d-block w-100" alt="Real Madrid" />
                </div>
              </div>
            </div>
          </div>
        </section>
        
        <h1 className="trends-header">Trends</h1>
        
        <section id="Our-shirts">
          <div className="Shirts-container">
            {trends.map(product => (
              <ProductCard
                key={product.id}
                product={product}
                onAddToCart={handleAddToCart}
              />
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default Home;