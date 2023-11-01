import React, { useState } from 'react';
import '../styles/login.css';
import { Link } from 'react-router-dom';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);
  const [errors, setErrors] = useState({ email: '', password: '' });

  const handleLogin = () => {
    // Check for validation errors before attempting to log in
    if (validateForm()) {
      // Add your login logic here
    }
  }

  const handleClose = () => {
    // Add code to close the page or navigate away
  }

  const validateForm = () => {
    let valid = true;
    const newErrors = { email: '', password: '' };

    // Validate email
    if (!email) {
      newErrors.email = 'Email is required';
      valid = false;
    } else if (!/\S+@\S+\.\S+/.test(email)) {
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
  }

  return (
    <div className="login-container">
      <div className="background-1"></div>
      <div className="background-2"></div>
      <div className="login-form">
      <div className="close-button">
        <Link to="/" style={{ color: '#000' }}>
          <i className="fa fa-times" onClick={handleClose}></i> {/* Use handleClose instead of handleCancel */}
        </Link>
      </div>
        <h1>Login</h1>
        <h2>Enter your details below:</h2>
        <form>
          <div className="form-group">
            <input
              type="text"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <div className="error-message">{errors.email}</div>
          </div>
          <div className="form-group">
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
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
          <button onClick={handleLogin}>
            <Link to="/menu" style={{ color: '#fff' }}>
              Login
            </Link>
          </button>
        </form>
        <div className="forgot-password">
          <Link to="/forgot-password">Forgot password?</Link>
        </div>
      </div>
    </div>
  );
}

export default Login;
