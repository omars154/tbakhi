import React from 'react';
import "../styles/Style.css";

function Footer() {
  return (
    <footer id="footer">
      <h4 className="ContactUs">Contact Us</h4>
      <div className="icons">
        <div>
          <a title="ahmad81.tbakhi@gmail.com">
            <img src="Photo/Gmail.png" alt="Gmail photo" />
            Kitatkom.jo@gmail.com
          </a>
        </div>
        <div>
          <a title="079XXXXXXX">
            <img src="Photo/Call.jpg" alt="Call photo" />
            079XXXXXXX
          </a>
        </div>
        <div>
          <a>
            <img src="Photo/facebook.png" alt="facebook icon" />
            Kitatkom.jo
          </a>
        </div>
        <div>
          <a>
            <img src="Photo/Instagram.jpg" alt="Instagram icon" />
            Kitatkom.jo
          </a>
        </div>
      </div>
      <p className="copyright">© 2024 Kitatko.jo . All rights reserved.</p>
    </footer>
  );
}

export default Footer;