import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/signup.css'; // Import your CSS

const SignUp = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
  });

  const [errors, setErrors] = useState({ email: '', password: '' });
  const MIN_PASSWORD_LENGTH = 8;

  const validateForm = () => {
    const { email, password } = formData;
    const emailError = isValidEmail(email) ? '' : 'Invalid email format';
    const passwordError =
      password.trim().length < MIN_PASSWORD_LENGTH
        ? `Password must be at least ${MIN_PASSWORD_LENGTH} characters long`
        : '';

    setErrors({ email: emailError, password: passwordError });
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSignUp = () => {
    validateForm();
    if (!errors.email && !errors.password) {
      // Proceed with the sign-up logic
      // Redirect to the appropriate page
    } else {
      // Handle error state, show messages, etc.
    }
  };

  const isValidEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleCancel = () => {
    // Add code to handle cancel logic here
    // For example, navigate back or close the sign-up form
  };

  return (
    <div className="signup-container">
      <div className="close-button">
        <Link to="/" style={{ color: '#000' }}>
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
        {errors.email && <div className="error-message">{errors.email}</div>}
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
        {errors.password && <div className="error-message">{errors.password}</div>}
      </div>
      <button onClick={handleSignUp} type="signup">
        Sign Up
      </button>
      <p>
  <span className="specific-margin with-margin">
    Do you agree with the <a href="/terms" className="with-margin">Terms</a> and
  </span>{' '}
  <a href="/terms">Conditions</a>.
</p>
<Link to="/login">
  <button className="have-account-button">Already have an account?</button>
</Link>
    </div>
  );
};

export default SignUp;
