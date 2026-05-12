import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar">
              <h2 className="logo">MyWebsite</h2>

    <div className="nav-links">  
          <NavLink to="/" className="nav-item">Home</NavLink>
      <NavLink to="/about" className="nav-item">About</NavLink>
      <NavLink to="/services" className="nav-item">Services</NavLink>
      <NavLink to="/contact" className="nav-item">Contact</NavLink>
      <NavLink to="/profile" className="nav-item">Profile</NavLink>
    </div>
    </nav>
  );
}

export default Navbar;