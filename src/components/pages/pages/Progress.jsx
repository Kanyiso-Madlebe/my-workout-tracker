import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../styles/progress.css';
import { FaWalking } from 'react-icons/fa';
import { FaRunning } from 'react-icons/fa';
import { IoMdFitness } from 'react-icons/io';
import { FaDumbbell } from 'react-icons/fa';

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
      <Link to="/menu" className="d-arrow">
        &#8592; 
      </Link>
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
      <div className="exercise-icons">
        <div className="exercise-icon">
          <IoMdFitness size={22} color="black" />
        </div>
        <div className="exercise-icon">
          <FaRunning size={22} color="black" />
        </div>
        <div className="exercise-icon">
          <FaDumbbell size={22} color="black" />
        </div>
      </div>
      <h2 className="page-heading">Week days</h2>

      {/* Bar graph section */}
      <div className="bar-graph-container">
      <div className="bar-graph">     
        <div className="bar" style={{ width: '15px', height: '147px', transform: 'rotate(0.469deg)', background: 'linear-gradient(0deg, #474646 0%, #474646 100%), linear-gradient(0deg, #474646 0%, #474646 100%), linear-gradient(0deg, #474646 0%, #474646 100%), #474646' }}></div>
        <div className="bar" style={{ width: '16px', height: '198px', transform: 'rotate(0.469deg)', background: '#979797' }}></div>
        <div className="bar" style={{ width: '15px', height: '136px', transform: 'rotate(0.469deg)', background: 'rgba(0, 0, 0, 0.83)' }}></div>
        <div className="bar" style={{ width: '15px', height: '180px', transform: 'rotate(0.469deg)', background: '#675B5B' }}></div>
        <div className="bar" style={{ width: '15px', height: '136px', transform: 'rotate(0.469deg)', background: 'rgba(0, 0, 0, 0.83)' }}></div>
        <div className="bar" style={{ width: '15px', height: '200px', transform: 'rotate(0.469deg)', background: 'rgba(0, 0, 0, 0.73)' }}></div>
        <div className="bar" style={{ width: '15px', height: '60px', transform: 'rotate(0.469deg)', background: '#746E6E' }}></div>
      </div>
    </div></div>
  );
}

export default Progress;
