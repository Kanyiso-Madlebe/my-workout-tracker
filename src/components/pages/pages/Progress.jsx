import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../styles/progress.css';
import { FaWalking } from 'react-icons/fa';

function Progress() {
  const [stepCount, setStepCount] = useState(0);
  const goal = 1000; // Define your step count goal
  const today = new Date().toDateString(); // Get the current date

  useEffect(() => {
    // Simulate an automatic step counter update (e.g., every 10 seconds)
    const interval = setInterval(() => {
      setStepCount(stepCount + 1);
    }, 10000);

    return () => {
      clearInterval(interval);
    };
  }, [stepCount]);

  return (
    <div className="progress-container">
     
      <Link to="/menu" className="back-arrow">&#8592;</Link>
      <h1 className="page-heading">My Progress</h1>
      <div className="progress-indicator">
        <div className="arrow left">&#9664;</div>
        <div className="progress-circle">
          <div className="walking-icon">
            <FaWalking size={22} color="black" /> {/* Use the walking icon */}
          </div>
          <div className="step-count">{stepCount} </div>
          <div className="goal">Goal: {goal} </div>
          <div className="today">Today: {today}</div>
        </div>
        <div className="arrow right">&#9654;</div>
      </div>
      </div>
  );
}

export default Progress;
