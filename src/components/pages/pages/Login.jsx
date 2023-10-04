import React, { useState } from 'react';
import '../styles/login.css';
   
function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);

  const handleLogin = () => {
    // You can add your authentication logic here.
    // For this example, we'll simply display the entered email and password.
    alert(`Email: ${email}\nPassword: ${password}\nRemember Me: ${rememberMe}`);
  };

  return (
    <div className="login-container">
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
    </div>
  );
}

export default LoginPage;
