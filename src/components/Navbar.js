import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'; // Import the CSS for the navbar

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="nav-left">
        <Link to="/">Home</Link>
        <Link to="/news">News</Link>
        <Link to="/avatar">Choose Avatar</Link>
      </div>
      <div className="nav-right">
        <Link to="/login" className="login-signup-button">Login/Sign-Up</Link>
      </div>
    </nav>
  );
};

export default Navbar;
