import React, { useState } from "react";
import "../styles/Style.css";

function ProductCard({ product, onAddToCart }) {
  const [quantity, setQuantity] = useState(1);

  const handleSubmit = (e) => {
    e.preventDefault();
    onAddToCart(product, quantity);
  };

  return (
    <div className="product">
      <div>
        <img src={product.image} alt={product.name} className="images" />
      </div>
      <p className="name">{product.name}</p>
      <hr className="hr" />
      <p className="price">{product.price} JD</p>

      <form onSubmit={handleSubmit} className="form">
        <input
          type="number"
          name="quantity"
          min="1"
          value={quantity}
          onChange={(e) => setQuantity(parseInt(e.target.value))}
          required
          className="quantity-input"
        />
        <input type="submit" value="Add to Cart" className="button" />
      </form>
    </div>
  );
}

export default ProductCard;
