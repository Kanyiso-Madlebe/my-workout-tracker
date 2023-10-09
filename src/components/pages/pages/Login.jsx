import React, { useState } from 'react';
import '../styles/login.css';
import Menu from '../pages/Menu';
import { Link } from 'react-router-dom';

function LoginPage() {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    rememberMe: false,
  });
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isPopupVisible, setIsPopupVisible] = useState(false);

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleLogin = () => {
    // You can perform your login logic here, e.g., make an API call.
    // For now, let's just simulate a login with a timeout.
    setTimeout(() => {
      alert(
        `Email: ${formData.email}\nPassword: ${formData.password}\nRemember Me: ${formData.rememberMe}`
      );
      setIsLoggedIn(true);
    }, 2000);
  };

  const handleExit = () => {
    setIsPopupVisible(false);
  };

  // if (isLoggedIn) {
  //   return <Menu />;
  // }

  return (
    <div className="login-container">
      <>
        {isPopupVisible && (
          <div className="popup">
            <button className="exit-button" onClick={handleExit}>
              X
            </button>
            <p>Popup Content</p>
          </div>
        )}
        <h2>Login</h2>
        <p>Enter your details below:</p>
        <div className="form-group">
          <label>Email:</label>
          <input
            type="text"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
          />
        </div>
        <div className="form-group">
          <label>Password:</label>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleInputChange}
          />
        </div>
        <div className="form-group">
          <div className="checkbox">
            <input
              type="checkbox"
              name="rememberMe"
              checked={formData.rememberMe}
              onChange={handleInputChange}
            />
          </div>
          <div className="checkbox-label">Remember me?</div>
        </div>

        <Link
          to="/menu"
          className="login-button" // Remove the width and margin-top properties
          onClick={handleLogin}
        >
          Login
        </Link>

        <p>
          <a href="/login">Forgot password?</a>
        </p>
      </>
    </div>
  );
}

export default LoginPage;
