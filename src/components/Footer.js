import React from 'react';
import './Form.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <h3>🌍 Climate Change Awareness</h3>
        <p>Join us in making the world a greener and better place for future generations.</p>
        <ul className="socials">
          <li>
            <a href="https://www.linkedin.com/in/abhishekjaiswalabesit/" target="_blank" rel="noopener noreferrer">
              <span role="img" aria-label="LinkedIn">💼</span> LinkedIn
            </a>
          </li>
          <li>
            <a href="https://www.facebook.com/Abhijai7088/" target="_blank" rel="noopener noreferrer">
              <span role="img" aria-label="Facebook">📘</span> Facebook
            </a>
          </li>
          <li>
            <a href="https://x.com/Abhishe80002015" target="_blank" rel="noopener noreferrer">
              <span role="img" aria-label="Twitter">🐦</span> Twitter (X)
            </a>
          </li>
          <li>
            <a href="https://www.instagram.com/abhijai7088/" target="_blank" rel="noopener noreferrer">
              <span role="img" aria-label="Instagram">📸</span> Instagram
            </a>
          </li>
        </ul>
      </div>
      <div className="footer-bottom">
        <p>© 2024 Climate Change Awareness | All rights reserved by <strong>Abhishek Jaiswal</strong></p>
      </div>
    </footer>
  );
};

export default Footer;
