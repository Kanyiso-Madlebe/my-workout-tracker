// components/Header.jsx
import React from 'react';
import '../styles/home.css'; // Import your CSS file

function Header() {
  return (
    <header className="header">
      <div className="logo">
        <h1>DGC</h1>
      </div>
      <p className="slogan">Track Your Gains, Train Your Way!</p>
      <div className="container">
        <p>Hi!</p>
        <hr /> {/* Add a line that divides the container */}
        <p>We're thrilled to see you</p>
        <p>Enjoy...</p>
        </div>
        <div className="buttons">
        <button className="login-button">Login</button>
        <button className="signup-button">Sign Up</button>
      </div>
        </header>
  );
}

export default Header;
