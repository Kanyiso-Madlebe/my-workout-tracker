import React, { useState, useEffect } from 'react';
import '../styles/menu.css';

function Navbar() {
  const [isArrowUp, setIsArrowUp] = useState(false);
  const [currentDay, setCurrentDay] = useState(0);
  const [startTime, setStartTime] = useState(null);
  const [elapsedTime, setElapsedTime] = useState(0);
  const [timerRunning, setTimerRunning] = useState(false);

  useEffect(() => {
    if (timerRunning) {
      const interval = setInterval(() => {
        setElapsedTime(Date.now() - startTime);
      }, 1000);

      return () => clearInterval(interval);
    }
  }, [timerRunning, startTime]);

  const toggleArrowDirection = () => {
    setIsArrowUp(!isArrowUp);
  };

  const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

  const displayDays = days.slice(currentDay, currentDay + 4);

  const nextDays = () => {
    if (currentDay < days.length - 4) {
      setCurrentDay(currentDay + 1);
    }
  };

  const prevDays = () => {
    if (currentDay > 0) {
      setCurrentDay(currentDay - 1);
    }
  };

  const getCurrentDateTime = () => {
    const now = new Date();
    const date = now.toDateString();
    const time = now.toLocaleTimeString();
    return `${date} ${time}`;
  };

  const startTimer = () => {
    setStartTime(Date.now() - elapsedTime);
    setTimerRunning(true);
  };

  const stopTimer = () => {
    setTimerRunning(false);
  };

  const resetTimer = () => {
    setElapsedTime(0);
    setTimerRunning(false);
  };

  const formatTime = (milliseconds) => {
    const seconds = Math.floor(milliseconds / 1000);
    const minutes = Math.floor(seconds / 60);
    const hours = Math.floor(minutes / 60);

    return `${hours}:${minutes % 60}:${seconds % 60}`;
  };

  return (
    <div>
      <nav className="navbar" id='menu'>
        <ul>
          <li>
            <a href="/" onClick={toggleArrowDirection}>
              Menu {isArrowUp ? '▲' : '▼'}
            </a>
          </li>
        </ul>
      </nav>
      <div className="ready-text"><strong>Ready to go</strong></div>
      <div className="day-container">
        <button className="arrow-left" onClick={prevDays} disabled={currentDay === 0}>&lt;</button>
        {displayDays.map((day, index) => (
          <div key={index} className="day">{day}</div>
        ))}
        <button className="arrow-right" onClick={nextDays} disabled={currentDay >= days.length - 4}>&gt;</button>
      </div>
      <div className="date-time">
        <p>{getCurrentDateTime()}</p>
        <div className="timer-container">
          <div className={`circle ${timerRunning ? 'active' : ''}`} onClick={timerRunning ? stopTimer : startTimer}>
            {timerRunning ? 'Stop' : 'Start'}
          </div>
          <p>Elapsed Time: {formatTime(elapsedTime)}</p>
        </div>
        <button className="reset-button" onClick={resetTimer}>
          Reset
        </button>
      </div>
    </div>
  );
  
}

export default Navbar;
