import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/progress.css';

function Progress() {
  return (
    <div className="progress-container">
      <Link to="/menu" className="back-arrow">&#8592;</Link>
      <h1 className="page-heading">My Progress</h1>
      <div className="progress-indicator">
        <div className="arrow left">&#9664;</div>
        <div className="progress-circle">
          <div className="progress-circle-inner">
            <div className="progress-circle-progress"></div>
          </div>
        </div>
        <div className="arrow right">&#9654;</div>
      </div>
      {/* Your content for the Progress page goes here */}
    </div>
  );
}

export default Progress;
