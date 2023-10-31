import React, { useState } from 'react';
import '../styles/login.css';
import { Link, useHistory } from 'react-router-dom';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);

  const history = useHistory(); // Initialize the history object

  const handleLogin = () => {
    // Check if the login logic is successful (you can add your validation here)
    if (email && password) {
      // Navigate to the "/menu" page when the "Login" button is clicked
      history.push('/menu');
    } else {
      // Handle invalid login, show an error message, etc.
    }
  }

  const handleClose = () => {
    // Add code to close the page or navigate away
  }

  return (
    <div className="login-container">
      <div className="background-1"></div>
      <div className="background-2"></div>
      <div className="login-form">
        <button className="close-button" onClick={handleClose}>
          <Link to="/" style={{ color: '#000' }}>X</Link>
        </button>
       
        <h1>Login</h1>
        <h2>Enter your details below:</h2>
        <form> 
          <input
            type="text"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <div className="remember-me">
            <label>
              <input
                type="checkbox"
                checked={rememberMe}
                onChange={() => setRememberMe(!rememberMe)}
              />
              Remember me
            </label>
          </div>
          <button onClick={handleLogin}>
            <Link to="/menu" style={{ color: '#fff' }}>Login</Link>
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
