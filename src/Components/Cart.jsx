import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Header from "./Header";
import Footer from "./Footer";
import "../styles/cart.css";

function Cart({ onLogout }) {
  const navigate = useNavigate();
  const [cartItems, setCartItems] = useState([]);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    fetchCart();
  }, []);

  useEffect(() => {
    calculateTotal();
  }, [cartItems]);

  const fetchCart = async () => {
    try {
      const response = await axios.get("/cart");
      setCartItems(response.data);
    } catch (error) {
      console.error("Error fetching cart:", error);
    }
  };

  const calculateTotal = () => {
    const sum = cartItems.reduce(
      (acc, item) => acc + item.price * item.quantity,
      0
    );
    setTotal(sum);
  };

  const handleUpdate = async (id, newQuantity) => {
    try {
      await axios.put(`/cart/update/${id}`, { quantity: newQuantity });
      fetchCart();
    } catch (error) {
      console.error("Error updating cart:", error);
    }
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`/cart/delete/${id}`);
      fetchCart();
    } catch (error) {
      console.error("Error deleting item:", error);
    }
  };

  const handleCheckout = async () => {
    try {
      await axios.delete("/cart/clear");
      alert("Thank you for purchasing from us, see you later!");
      navigate("/home");
    } catch (error) {
      console.error("Error clearing cart:", error);
    }
  };

  return (
    <div>
      <Header isAuthenticated={true} onLogout={onLogout} />
      <main>
        <h1>Your Cart</h1>
        <section id="cart-container" className="container">
          <table className="table table-bordered text-center">
            <thead>
              <tr>
                <th>Image</th>
                <th>Name</th>
                <th>Price (JD)</th>
                <th>Quantity</th>
                <th>Total Price (JD)</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {cartItems.map((item) => (
                <tr key={item.id}>
                  <td>
                    <img src={item.image} alt={item.name} className="images" />
                  </td>
                  <td>{item.name}</td>
                  <td>{item.price} JD</td>
                  <td>
                    <form
                      onSubmit={(e) => {
                        e.preventDefault();
                        const qty = parseInt(e.target.quantity.value);
                        handleUpdate(item.id, qty);
                      }}
                    >
                      <input
                        type="number"
                        name="quantity"
                        defaultValue={item.quantity}
                        min="1"
                        className="quantity-input"
                      />
                      <button type="submit" className="btn-update">
                        Update
                      </button>
                    </form>
                  </td>
                  <td>{item.price * item.quantity} JD</td>
                  <td>
                    <button
                      onClick={() => handleDelete(item.id)}
                      className="delete-btn"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <h3 className="total">Total: {total} JD</h3>
          <div className="checkout-cont">
            <button onClick={handleCheckout} className="checkout">
              Order Confirmed
            </button>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default Cart;
