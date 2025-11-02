import React, { useState, useEffect } from "react";
import axios from "axios";
import Header from "./Header";
import ProductCard from "./ProductCard";
import "../styles/shirts.css";

function Accessories({ isAuthenticated, onLogout }) {
  const [accessories, setAccessories] = useState([]);

  useEffect(() => {
    fetchAccessories();
  }, []);

  const fetchAccessories = async () => {
    try {
      const response = await axios.get("/products/accessories");
      setAccessories(response.data);
    } catch (error) {
      console.error("Error fetching accessories:", error);
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
          <h1 className="h1-shirts">Our Accessories</h1>
          <div className="Shirts-container">
            {accessories.map((product) => (
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

export default Accessories;
