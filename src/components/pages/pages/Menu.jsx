import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../styles/menu.css';
import Pic1 from '../images/yogayo.jpeg';
import Pic2 from '../images/stretch.jpeg';
import Pic3 from '../images/wa.jpeg';

function Navbar() {
  const [isArrowUp, setIsArrowUp] = useState(false);
  const [currentDay, setCurrentDay] = useState(0);
  const [startTime, setStartTime] = useState(null);
  const [elapsedTime, setElapsedTime] = useState(0);
  const [timerRunning, setTimerRunning] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false); // State to control the menu visibility

  useEffect(() => {
    if (timerRunning) {
      const interval = setInterval(() => {
        setElapsedTime(Date.now() - startTime);
      }, 1000);

      return () => clearInterval(interval);
    }
  }, [timerRunning, startTime]);

  const toggleArrowDirection = (e) => {
    e.preventDefault(); // Prevent the default link behavior
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

  const handleImageClick = (imageId) => {
    // Your image click handling logic here
    console.log(`Clicked on image with id: ${imageId}`);
  };

  // Updated handleMenuClick function to toggle the menu
  const handleMenuClick = (e) => {
    e.preventDefault(); // Prevent the default link behavior
    setIsMenuOpen(!isMenuOpen); // Toggle the menu visibility
  };

  return (
    <div>
      <nav className="navbar" id="menu">
        <ul>
          <li>
            <a href="/menu" onClick={handleMenuClick}>
              Menu {isMenuOpen ? '▲' : '▼'}
            </a>
          </li>
        </ul>
      </nav>

      {/* Dropdown menu */}
      {isMenuOpen && (
        <div className="menu-dropdown">
          <ul>
            <li><Link to="/history">History</Link></li>
            <li><Link to="/faq">FAQ</Link></li>
            <li><Link to="/terms-privacy">Terms and Privacy</Link></li>
            <li><Link to="/settings">Settings</Link></li>
            <li><Link to="/">Logout</Link></li>
          </ul>
        </div>
      )}

      <div className="ready-text">
        <strong>Ready to go</strong>
      </div>

      <div className="day-container">
        <button className="arrow-left" onClick={prevDays} disabled={currentDay === 0}>
          &lt;
        </button>
        {displayDays.map((day, index) => (
          <div key={index} className="day">
            {day}
          </div>
        ))}
        <button className="arrow-right" onClick={nextDays} disabled={currentDay >= days.length - 4}>
          &gt;
        </button>
      </div>

      <div className="date-time">
        <p>{getCurrentDateTime()}</p>
        <div className="timer-container">
          <div
            className={`circle ${timerRunning ? 'active' : ''}`}
            onClick={timerRunning ? stopTimer : startTimer}  
          >
            {timerRunning ? 'Stop' : 'Start'}
          </div>
          <p>Elapsed Time: {formatTime(elapsedTime)}</p>
        </div>
        <button className="reset-button" onClick={resetTimer}>
          Reset
        </button>
      </div>

      <div className="image-category">
        <u>
          <div className="category-heading">
            Category
            <i className="fas fa-image category-icon"></i>
          </div>
        </u>
        <div className="image-container">
          <img
            src={Pic3}
            alt="one"
            id="one"
            onClick={() => handleImageClick('one')}
            className="image"
          />
          <img
            src={Pic2}
            alt="two"
            id="two"
            onClick={() => handleImageClick('two')}
            className="image"
          />
          <img
            src={Pic1}
            alt="three"
            id="three"
            onClick={() => handleImageClick('three')}
            className="image"
          />
        </div>
        <br /><br />
        <Link to="/progress" className="navigate-button">
          +
        </Link>
      </div>
    </div>
  );
}

export default Navbar;
