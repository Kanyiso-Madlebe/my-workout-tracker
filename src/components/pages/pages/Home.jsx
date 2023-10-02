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
    </header>
  );
}

export default Header;
