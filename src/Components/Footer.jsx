import React from "react";
import "../styles/Footer.css";


function Footer() {
  return (
    <footer className="footer">
      <p>© {new Date().getFullYear()} MyReactSite. All rights reserved.</p>
      <div className="social-links">
        <a href="https://twitter.com" target="_blank" rel="noreferrer">Twitter</a>
        <a href="https://github.com" target="_blank" rel="noreferrer">GitHub</a>
        <a href="https://linkedin.com" target="_blank" rel="noreferrer">LinkedIn</a>
      </div>
    </footer>
  );
}

export default Footer;
