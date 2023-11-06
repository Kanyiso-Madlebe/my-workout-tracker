import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/settings.css';
import Person from '../images/download.png'

function SettingsPage() {
  const handleLogout = () => {
    // Implement your logout logic here
  };

  return (
    <div className="settings-container">
      <h1>Kanyiso Madlebe</h1>
      <div className="image-container">
        <img src={Person} alt="pic" />
        </div>

      <h4>Debz user since Oct 2023</h4>

      <div className="profile-section">
        <h2>Basic Profile</h2>
        <p>
          <i className="fas fa-user"> </i> Kanyiso Madlebe
        </p>
        <p>
          <i className="fas fa-globe"> </i> 
          <a href="https://firedee-c34e8.web.app">https://firedee-c34e8.web.app</a>
        </p>
        <p>
          <i className="fas fa-info"> </i> Here’s a little bit about me. So it goes on and on.
        </p>
      </div>

      <div className="private-info-section">
        <h2>Private Information</h2>
        <p>
          <i className="fas fa-envelope"> </i> kanyisomadlebe@yahoo.com
        </p>
        <p>
          <i className="fas fa-phone"> </i> 0647473024
        </p>
        <p>
          <i className="fas fa-mars"> </i> Male
        </p>
      </div>

      <div className="change-password-section">
        <h2>Change Password</h2>
        <p>
          <i className="fas fa-lock"> </i> Enter new password
        </p>
        <p>
          <i className="fas fa-lock"> </i> Retype new password
        </p>
      </div>

      <div className="about-section">
        <h2>About</h2>
        <p>
          <i className="fas fa-info"> </i> Help
        </p>
        <div className="logout-button-container">
            <button onClick={handleLogout}>
                <Link to="/" style={{ color: '#fff' }}>
                Logout
                </Link>
            </button>
            </div>

      </div>
    </div>
  );
}

export default SettingsPage;
