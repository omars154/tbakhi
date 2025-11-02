import React from 'react';
import Header from './Header';
import Footer from './Footer';
import "../styles/Style.css";

function AboutUs({ isAuthenticated, onLogout }) {
  return (
    <div>
      <Header isAuthenticated={isAuthenticated} onLogout={onLogout} />
      <main>
        <section id="aboutUs-border">
          <div className="image-container">
            <img src="./Photo/aboutUS.png" alt="" className="background-image" />
            <img src="./Photo/transparent .png" alt="" className="transparent-logo" />
            <p className="center-text">About Us</p>
          </div>
        </section>
        <section className="text">
          <h1>About us</h1>
          <p>
            This site is a site for all football enthusiasts. This site collects shirts that have 
            historical moments in football. It provides iconic shirts for old seasons. We hope to 
            satisfy you. If you encounter any problems, do not hesitate and contact us. We always 
            strive to achieve your satisfaction kitatkom.jo your best choice
          </p>
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default AboutUs;