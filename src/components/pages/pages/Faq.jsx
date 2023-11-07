import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/faq.css';

function FAQ() {
  const [questions, setQuestions] = useState([
    {
      id: 1,
      question: "What is DGC?",
      answer: "DGC stands for 'Daily Gym Companion,' and it's a workout tracker app designed to help you monitor and improve your fitness journey."
    },
    {
      id: 2,
      question: "How can I download DGC?",
      answer: "You can download DGC from the App Store for iOS devices or Google Play Store for Android devices. Simply search for 'DGC' and install it."
    },
    {
      id: 3,
      question: "Is DGC free to use?",
      answer: "Yes, DGC offers a free version with basic features."
    },
    {
      id: 4,
      question: "How do I create a workout plan?",
      answer: "To create a workout plan, go to the 'Workouts' section in the app, click on 'Create New Plan,' and follow the on-screen instructions. You can customize your exercises, sets, and reps."
    },
    {
      id: 5,
      question: "Can I track my progress with DGC?",
      answer: "Absolutely! DGC allows you to track your daily step count, calories burned, and workout progress. You can set fitness goals and monitor your achievements."
    },
  ]);

  return (
    <div className="faq-page">
        <Link to="/menu" className="back">
        &#8592; 
      </Link>
      <h1>Frequently Asked Questions (FAQ)</h1>
      <ul className="question-list">
        {questions.map((q) => (
          <li key={q.id}>
            <div className="question">{q.question}</div>
            <div className="answer">{q.answer}</div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default FAQ;
