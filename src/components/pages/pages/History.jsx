import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import '../styles/history.css';

function History() {
  const [workoutHistory, setWorkoutHistory] = useState([
    {
      id: 1,
      date: '2023-11-05',
      duration: '30 minutes',
      type: 'Dumbbells',
    },
    {
      id: 2,
      date: '2023-11-06',
      duration: '45 minutes',
      type: 'Strength Training',
    },
    // Add more workout history entries here
  ]);

  return (
    <div className="history-page">
      <Link to="/menu" className="e-back">
        &#8592; 
      </Link>
      <h1>Workout History</h1>

      <div className="history-filters">
        <button>Today</button>
        <button>1 Week Ago</button>
        <button>1 Month Ago</button>
        <button>1 Year Ago</button>
      </div>

      <ul className="workout-list">
        {workoutHistory.map((workout) => (
          <li key={workout.id}>
            <div className="workout-date">{workout.date}</div>
            <div className="workout-details">
              <div className="workout-duration">{workout.duration}</div>
              <div className="workout-type">{workout.type}</div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default History;
