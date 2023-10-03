import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/home.css'; // Import your CSS file

function Header() {
  return (
    <header className="header">
      <div className="logo">
        <h1>DGC</h1>
      </div>
      <p className="slogan">Track Your Gains, Train Your Way!</p>
      <div className="container">
        <div className="container-content">
          <p>Hi!</p>
          <hr /> {/* Add a line that divides the container */}
          <p>We're thrilled to see you</p>
          <p>Enjoy...</p>
        </div>
      </div>
      <div className="buttons">
        <Link to="/login" className="login-button">
          Login
        </Link>
        <Link to="/signup" className="signup-button">
          Sign Up
        </Link>
      </div>
    </header>
  );
}

export default Header;
