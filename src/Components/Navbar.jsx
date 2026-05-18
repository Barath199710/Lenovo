import { Link } from "react-router-dom";
import React from "react";
import "../Navbar.css";

function Navbar() {
  return (
    <nav className="navbar">
      <h2 className="logo">MyReactSite</h2>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/services">Services</Link></li>
        <li><Link to="/gallery">Gallery</Link></li>
        <li><Link to="/contact">Contact</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;
