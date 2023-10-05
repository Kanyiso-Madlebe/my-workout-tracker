import React, { useState } from 'react';
import '../styles/login.css';
import Home from '../pages/Home';
import Menu from '../pages/Menu'; // Correct the import path

function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    // Perform your login logic here (e.g., check credentials)
    // For now, let's simulate a successful login after 2 seconds
    setTimeout(() => {
      alert(`Email: ${email}\nPassword: ${password}\nRemember Me: ${rememberMe}`);
      setIsLoggedIn(true); // Set the login status to true
    }, 2000);
  };

  const handleExit = () => {
    setIsPopupVisible(false); // Close the popup when "X" is clicked
  };

  // Render the Menu component when isLoggedIn is true
  if (isLoggedIn) {
    return <Menu />;
  }

  return (
    <div className="login-container">
      <>
        <button className="exit-button" onClick={handleExit}>
          X
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
 