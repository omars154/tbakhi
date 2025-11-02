import React, { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import axios from "axios";
import SignUp from "./Components/SignUp";
import SignIn from "./components/SignIn";
import Home from "./Components/Home";
import Shop from "./components/Shop";
import Shirts from "./components/Shirts";
import Shoes from "./components/Shoes";
import Accessories from "./components/Accessories";
import Cart from "./components/Cart";
import AboutUs from "./components/AboutUs";

axios.defaults.baseURL = "http://localhost:5000/api";
axios.defaults.withCredentials = true;

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    checkSession();
  }, []);

  const checkSession = async () => {
    try {
      const response = await axios.get("/auth/check-session");
      if (response.data.isAuthenticated) {
        setIsAuthenticated(true);
      } else {
        setIsAuthenticated(false);
      }
    } catch (error) {
      console.error("Error checking session:", error);
      setIsAuthenticated(false);
    }
  };

  const handleLogin = () => {
    setIsAuthenticated(true);
  };

  const handleLogout = async () => {
    await axios.post("/auth/logout");
    setIsAuthenticated(false);
  };

  return (
    <Router>
      <Routes>
        <Route path="/signup" element={<SignUp />} />
        <Route path="/signin" element={<SignIn onLogin={handleLogin} />} />
        <Route
          path="/home"
          element={
            <Home isAuthenticated={isAuthenticated} onLogout={handleLogout} />
          }
        />
        <Route
          path="/shop"
          element={
            <Shop isAuthenticated={isAuthenticated} onLogout={handleLogout} />
          }
        />
        <Route
          path="/shirts"
          element={
            <Shirts isAuthenticated={isAuthenticated} onLogout={handleLogout} />
          }
        />
        <Route
          path="/shoes"
          element={
            <Shoes isAuthenticated={isAuthenticated} onLogout={handleLogout} />
          }
        />
        <Route
          path="/accessories"
          element={
            <Accessories
              isAuthenticated={isAuthenticated}
              onLogout={handleLogout}
            />
          }
        />
        <Route
          path="/cart"
          element={
            isAuthenticated ? (
              <Cart onLogout={handleLogout} />
            ) : (
              <Navigate to="/signin" />
            )
          }
        />
        <Route
          path="/aboutus"
          element={
            <AboutUs
              isAuthenticated={isAuthenticated}
              onLogout={handleLogout}
            />
          }
        />
        <Route path="/" element={<Navigate to="/home" />} />
      </Routes>
    </Router>
  );
}

export default App;
