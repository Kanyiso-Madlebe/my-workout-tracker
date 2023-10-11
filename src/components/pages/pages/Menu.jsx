import React, { useState } from 'react';
import '../styles/menu.css';

function Navbar() {
  const [isArrowUp, setIsArrowUp] = useState(false);
  const [currentDay, setCurrentDay] = useState(0); // To keep track of the currently displayed day

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
    </div>
  );
}

export default Navbar;
