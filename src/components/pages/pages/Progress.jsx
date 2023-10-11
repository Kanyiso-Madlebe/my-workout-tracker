import React from 'react';
import { Link } from 'react-router-dom'; 
import '../styles/progress.css';

function Progress() {
  return (
    <div className="progress-container">
      <Link to="/menu" className="back-arrow">&#8592;</Link>
      <h1 className="page-heading">My Progress</h1>
      {/* Your content for the Progress page goes here */}
    </div>
  );
}

export default Progress;
