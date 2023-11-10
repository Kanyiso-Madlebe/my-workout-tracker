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

  const [errors, setErrors] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
  });

  const [isSuccess, setIsSuccess] = useState(false);
  const MIN_PASSWORD_LENGTH = 8;

  const validateForm = () => {
    const { firstName, lastName, email, password } = formData;

    // Validate each field separately and set individual error messages
    const firstNameError = firstName.trim() ? '' : 'First name is required';
    const lastNameError = lastName.trim() ? '' : 'Last name is required';
    const emailError = isValidEmail(email) ? '' : 'Invalid email format';
    const passwordError =
      password.trim().length < MIN_PASSWORD_LENGTH
        ? `Password must be at least ${MIN_PASSWORD_LENGTH} characters long`
        : '';

    // Set individual errors for each field
    setErrors({
      firstName: firstNameError,
      lastName: lastNameError,
      email: emailError,
      password: passwordError,
    });
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
    if (Object.values(errors).every(val => !val) && Object.values(formData).every(val => val)) {
      setIsSuccess(true);
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
      {
        isSuccess ? (
          <div className="pop">
            <p>You've created the account successfully!</p>
            <p>now <Link to="/login">login</Link></p>
          </div>
        ) : (
          <>
            <div className="form-group">
              <label htmlFor="firstName">First Name</label>
              <input
                type="text"
                name="firstName"
                id="firstName"
                value={formData.firstName}
                onChange={handleInputChange}
              />
              {errors.firstName && <div className="error-message">{errors.firstName}</div>}
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
              {errors.lastName && <div className="error-message">{errors.lastName}</div>}
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
            <div className="form-group">
              <button onClick={handleSignUp} type="signup" disabled={Object.values(errors).some(err => err) || Object.values(formData).some(val => !val)}>
                Sign Up
              </button>
            </div>
          </>
        )
      }
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
