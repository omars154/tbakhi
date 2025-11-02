import React, { useState, useEffect } from "react";
import axios from "axios";
import Header from "./Header";
import Footer from "./Footer";
import ProductCard from "./ProductCard";
import "../styles/shirts.css";

function Shoes({ isAuthenticated, onLogout }) {
  const [shoes, setShoes] = useState([]);

  useEffect(() => {
    fetchShoes();
  }, []);

  const fetchShoes = async () => {
    try {
      const response = await axios.get("/products/shoes");
      setShoes(response.data);
    } catch (error) {
      console.error("Error fetching shoes:", error);
    }
  };

  const handleAddToCart = async (product, quantity) => {
    try {
      await axios.post("/cart/add", {
        name: product.name,
        price: product.price,
        quantity: quantity,
        image: product.image,
      });
      alert("Item has been added to cart!");
    } catch (error) {
      alert(error.response?.data?.message || "Please sign in first!!");
    }
  };

  return (
    <div>
      <Header isAuthenticated={isAuthenticated} onLogout={onLogout} />
      <main>
        <section id="Our-shirts">
          <h1 className="h1-shirts">Our Shoes</h1>
          <div className="Shirts-container">
            {shoes.map((product) => (
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

export default Shoes;
