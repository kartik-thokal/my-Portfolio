import React from "react";
import { FaInstagram, FaGithub, FaLinkedin } from "react-icons/fa";
import "../styles/Footer.css";

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <p className="footer-text">Designed and Developed by Kartik Thokal</p>
      <div className="footer-icons">
        
        <a href="https://github.com/kartik-thokal/" target="_blank" rel="noopener noreferrer">
          <FaGithub />
        </a>
        <a href="https://www.linkedin.com/in/kartik-thokal/" target="_blank" rel="noopener noreferrer">
          <FaLinkedin />
        </a>
      </div>
      <p className="footer-copyright">© {year} KT. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
