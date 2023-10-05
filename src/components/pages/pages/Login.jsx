import React, { useState } from 'react';
import '../styles/login.css';
import Home from '../pages/Home';

function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);
  const [isPopupVisible, setIsPopupVisible] = useState(true);

  const handleLogin = () => {
    alert(`Email: ${email}\nPassword: ${password}\nRemember Me: ${rememberMe}`);
  };

  const handleExit = () => {
    setIsPopupVisible(false); // Close the popup when "X" is clicked
  };

  // Render nothing if isPopupVisible is false
  if (!isPopupVisible) {
    return null;
  }

  return (
    <div className="login-container">
      <>
        <button className="exit-button" onClick={handleExit}>
          x     
        </button>
        <h2>Login</h2>
        <p>Enter your details below:</p>
        <div className="form-group">
          <label>Email:</label>
          <input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label>Password:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className="form-group">
          <div className="checkbox">
            <input
              type="checkbox"
              checked={rememberMe}
              onChange={() => setRememberMe(!rememberMe)}
            />
          </div>
          <div className="checkbox-label">Remember me?</div>
        </div>

        <button onClick={handleLogin}>Login</button>
        <p><a href="/login">Forgot password?</a></p>
      </>
    </div>
  );
}

export default LoginPage;
      