import React, { useState } from 'react'; // Import useState
import { Link } from 'react-router-dom';
import '../styles/home.css';
import LoginPage from "./Login";
import SignUpForm from "./Signup";

function Header() {
  const [showLogin, setShowLogin] = useState(false);
  const [showSignup, setShowSignup] = useState(false);

  const toggleLogin = () => {
    setShowLogin(!showLogin);
    setShowSignup(false);
  };

  const toggleSignup = () => {
    setShowSignup(!showSignup);
    setShowLogin(false);
  };

  return (
    <header className="header">
      {/* Your header content */}
      <div className="logo">
        <h1>DGC</h1>
      </div>
      <p className="slogan">Track Your Gains, Train Your Way!</p>
      <div className="container">
        <p>Hi!</p>
        <p>We're thrilled to see you</p>
        <p>Enjoy...</p>
      </div>
      <div className="buttons">
        <button onClick={toggleLogin} className="login-button">
          Login
        </button>
        <button onClick={toggleSignup} className="signup-button">
          Sign Up
        </button>
      </div>
      {showLogin && <LoginPage />} {/* Render login page when showLogin is true */}
      {showSignup && <SignUpForm />} {/* Render signup page when showSignup is true */}
    </header>
  );
}

export default Header;
