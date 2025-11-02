import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import axios from 'axios';
import '../styles/signin.css';

function SignIn({ onLogin }) {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
      const response = await axios.post('/auth/signin', {
        email: formData.email,
        password: formData.password
      });
      onLogin(response.data.email);
      navigate('/home');
    } catch (error) {
      alert(error.response?.data?.message || 'Invalid username or password. Please try again.');
    }
  };

  return (
    <div className="SignIn-container">
      <h1>Kitatkom.jo</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          name="email"
          placeholder="Email"
          className="email"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          className="password"
          value={formData.password}
          onChange={handleChange}
          required
        />
        <button className="Submit" type="submit">Sign in</button>
        <p>Don't have an account ? <Link to="/signup">sign up</Link></p>
      </form>
    </div>
  );
}

export default SignIn;