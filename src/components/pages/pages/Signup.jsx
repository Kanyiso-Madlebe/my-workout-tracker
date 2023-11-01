import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/signup.css';
import 'font-awesome/css/font-awesome.min.css';

const SignUp = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSignUp = () => {
    // Handle sign-up logic here
  };

  const handleCancel = () => {
    // Handle cancel logic here
  };

  return (
    <div className="signup-container">
      <div className="close-button">
        <Link to="/" style={{ color: '#000' }}> {/* Wrap the "Close" button with Link */}
          <i className="fa fa-times" onClick={handleCancel}></i>
        </Link>
      </div>
      <h2>Create an account</h2>
      <div className="form-group">
        <label htmlFor="firstName">First Name</label>
        <input
          type="text"
          name="firstName"
          id="firstName"
          value={formData.firstName}
          onChange={handleInputChange}
        />
      </div>
      <div className="form-group">
        <label htmlFor="lastName">Last Name</label>
        <input
          type="text"
          name="lastName"
          id="lastName"
          value={formData.lastName}
          onChange={handleInputChange}
        />
      </div>
      <div className="form-group">
        <label htmlFor="email">Email</label>
        <input
          type="email"
          name="email"
          id="email"
          value={formData.email}
          onChange={handleInputChange}
        />
      </div>
      <div className="form-group">
        <label htmlFor="password">Password</label>
        <input
          type="password"
          name="password"
          id="password"
          value={formData.password}
          onChange={handleInputChange}
        />
      </div>
      <button onClick={handleSignUp} type="submit">Sign Up</button>
      <p>
        <span>Do you agree with the <a href="/terms">Terms of Service</a> and</span>{' '}
        <a href="/privacy">Privacy Policy</a>.
      </p>
      <button className="have-account-button">Already have an account?</button>
    </div>
  );
};

export default SignUp;
