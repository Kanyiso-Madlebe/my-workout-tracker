import React, { useState } from 'react';
import '../styles/login.css';
import { Link } from 'react-router-dom';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faGoogle } from '@fortawesome/free-brands-svg-icons';

library.add(faFacebook, faGoogle);


function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);
  const [errors, setErrors] = useState({ email: '', password: '' });

  const handleLogin = (e) => {
    e.preventDefault(); // Prevent the form from submitting

    // Check for validation errors before attempting to log in
    if (validateForm()) {
      // Check if the user exists in the user database
      // If the user exists, proceed with the login logic
      // If the user doesn't exist, display an error message or navigate to the sign-up page
    }
  };

  const handleClose = () =>{
    // Add code to close the page or navigate away
  };

  const validateForm = () => {
    let valid = true;
    const newErrors = { email: '', password: '' };

    // Validate email
    if (!email) {
      newErrors.email = 'Email is required';
      valid = false;
    } else if (!/\S+@\S+.\S+/.test(email)) {
      newErrors.email = 'Email is invalid';
      valid = false;
    }

    // Validate password (you can add more criteria here)
    if (!password) {
      newErrors.password = 'Password is required';
      valid = false;
    }

    setErrors(newErrors);
    return valid;
  };

  return (
    <div className="login-container">
      <div className="background-1"></div>
      <div className="background-2"></div>
      <div className="login-form">
        <div className="close-button">
          <Link to="/" style={{ color: '#000' }}>
            <i className="fa fa-times" onClick={handleClose}></i>
          </Link>
        </div>
        <h1>Login</h1>
        <h2>Enter your details below:</h2>
        <form onSubmit={handleLogin}>
          <div className="form-group">
            <input
              type="text"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <div className="error-message">{errors.email}</div>
          </div>
          <div className="form-group">
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="password"
              required
            />
            <div className="error-message">{errors.password}</div>
          </div>
          <div className="remember-me">
            <label>
              <input
                type="checkbox"
                checked={rememberMe}
                onChange={() => setRememberMe(!rememberMe)}
              />
              Remember?
            </label>
          </div>
          <Link to="/menu">
            <button style={{ color: '#fff' }} type="submit">
              Login
            </button>
          </Link>
        </form>
        <div className="forgot-password">
          <Link to="/otp">Forgot password?</Link>
          <div className="social-icons">
            <a href="https://www.facebook.com/">
              {/* Link to Facebook login page */}
              <FontAwesomeIcon icon={['fab', 'facebook']} />
              {/* Facebook icon */}
            </a>
            <a href="https://www.google.com/">
              {/* Link to Google login page */}
              <FontAwesomeIcon icon={['fab', 'google']} />
              {/* Google icon */}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;