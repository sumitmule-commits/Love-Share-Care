import React from "react";
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaTwitter } from "react-icons/fa";
import "./Footer.css"; 

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <p className="footer-text">
          © {new Date().getFullYear()} <span className="brand-name">LoveCareShare</span> — Empowering Kindness Together ❤️
        </p>

        <div className="social-icons">
          <a href="https://www.facebook.com/Love-Care-Share-993050030763532/" target="_blank" rel="noopener noreferrer" className="icon">
            <FaFacebookF />
          </a>
          <a href="https://www.instagram.com/lcslovecareshare/" target="_blank" rel="noopener noreferrer" className="icon">
            <FaInstagram />
          </a>
          <a href="https://twitter.com/love_careshare" target="_blank" rel="noopener noreferrer" className="icon">
            <FaTwitter />
          </a>
          <a href="https://www.linkedin.com/in/sumit-mule" target="_blank" rel="noopener noreferrer" className="icon">
            <FaLinkedinIn />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
