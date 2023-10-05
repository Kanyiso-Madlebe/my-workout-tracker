import React, { useState } from 'react';
import '../styles/signup.css';
import 'font-awesome/css/font-awesome.min.css';

function SignUpForm() {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const [isPopupVisible, setIsPopupVisible] = useState(true); // Set to true to initially show the popup

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

  const handleExit = () => {
    setIsPopupVisible(false); // Close the popup when "X" is clicked
  };

  // Render nothing if isPopupVisible is false
  if (!isPopupVisible) {
    return null;
  }

  return (
    <div className={`login-container ${isPopupVisible ? 'show' : 'hide'}`}>
      <>
        <button className="exit-button" onClick={handleExit}>
          X
        </button>
        <h2>Sign Up</h2>
        <p>
          Already a member? <a href="/login">Log in</a>
        </p>
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
            <i className="fa fa-google"></i>
          </button>
          <button className="social-button">
            <i className="fa fa-facebook"></i>
          </button>
        </div>
      </>
    </div>
  );
}

export default SignUpForm;
