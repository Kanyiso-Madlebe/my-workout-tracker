import React, { useState } from 'react';
import '../styles/signup.css';
import 'font-awesome/css/font-awesome.min.css'; 

function SignUpForm() {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // You can add your form submission logic here
    console.log(formData);
  };

  return (
    <div className='login-container'>
      <h2>Sign Up</h2>
      <p>Already a member? <a href="/login">Log in</a></p>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit">Sign Up</button>
      </form>
      <p>or sign up with</p>
      <div className="social-buttons">
        <button className="social-button">
            <i className="fa fa-google"></i> Sign Up with Google
        </button>
        <button className="social-button">
            <i className="fa fa-facebook"></i> Sign Up with Facebook
        </button>
        </div>

    </div>
  );
}

export default SignUpForm;
