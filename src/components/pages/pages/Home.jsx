import React, { useState } from 'react';
import { motion } from 'framer-motion'; // Import motion from your animation library
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
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 1 }}
          className="buttons-desktop"
        >
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="button1"
        
            onClick={toggleLogin}
          >
            Login
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="button2"
  
            onClick={toggleSignup}
          >
            Sign Up
          </motion.button>
        </motion.div>
      </div>

      {showLogin && <LoginPage />}
      {showSignup && <SignUpForm />}
    </header>
  );
}

export default Header;
