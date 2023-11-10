import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faGoogle } from '@fortawesome/free-brands-svg-icons';
import '../styles/login.css';


library.add(faFacebook, faGoogle);

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState({ email: '', password: '' });
  const [formValid, setFormValid] = useState(false);
  const MIN_PASSWORD_LENGTH = 8;

  const validateForm = () => {
    const emailError = isValidEmail(email) ? '' : 'Invalid email format';
    const passwordError =
      password.trim().length < MIN_PASSWORD_LENGTH
        ? `Password must be at least ${MIN_PASSWORD_LENGTH} characters long`
        : '';

    setErrors({ email: emailError, password: passwordError });

    setFormValid(!(emailError || passwordError));
  };

  useEffect(() => {
    // Run validation on email or password change
    validateForm();
  }, [email, password]);

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleLogin = (e) => {
    e.preventDefault();
    if (formValid) {
      // Proceed with the login logic
      // Redirect to the "menu" page
    } else {
      // Handle error state, show messages, etc.
    }
  };

  const isValidEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleClose = () => {
    // Add code to close the page or navigate away
  };

  return (
        <div className="background-2">
    <div className="login-container">
      <div className="login-form">
        <div className="close-button">
          <Link to="/" style={{ color: '#000' }}>
            <i className="fa fa-times" onClick={handleClose}></i>
          </Link>
        </div>
        <h2>Login</h2>
        <h2>Enter your details below:</h2>
        <form onSubmit={handleLogin}>
          <div>
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              value={email}
              onChange={handleEmailChange}
            />
            <span className="error">{errors.email}</span>
          </div>
          <div>
            <label htmlFor="password">Password:</label>
            <input
              type="password"
              id="password"
              name="password"
              value={password}
              onChange={handlePasswordChange}
            />
            <span className="error">{errors.password}</span>
          </div>
          {formValid && (
            <button type="submit">
              <Link to="/menu">Login</Link>
            </button>
          )}
        </form>
        <div className="forgot-password">
          <Link to="/otp">Forgot password?</Link>
          <div className="social-icons">
            <a href="https://www.facebook.com/">
              <FontAwesomeIcon icon={['fab', 'facebook']} />
            </a>
            <a href="https://www.google.com/">
              <FontAwesomeIcon icon={['fab', 'google']} />
            </a>
          </div>
        </div>
      </div>
    </div></div>
  );
}

export default Login;
