import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/faq.css';

function FAQ() {
  const [questions, setQuestions] = useState([
    {
      id: 1,
      question: "What is DGC?",
      answer: "DGC stands for 'Debeza's Gym Companion,' and it's a workout tracker app designed to help you monitor and improve your fitness journey."
    },
    // Add more initial questions and answers here
  ]);

  const [newQuestion, setNewQuestion] = useState('');

  const handleQuestionSubmit = () => {
    // Send the new question to the admin portal (you'll need to implement this part)
    // For now, we'll just update the state with the new question
    setQuestions([
      ...questions,
      {
        id: questions.length + 1,
        question: newQuestion,
        answer: "This question is awaiting an answer from the admin."
      }
    ]);
    setNewQuestion(''); // Clear the input field
  };

  return (
    <div className="faq-page">
        <Link to="/menu" className="b-arrow">
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

      <div className="user-input">
        <input
          type="text"
          value={newQuestion}
          placeholder="Ask a question..."
          onChange={(e) => setNewQuestion(e.target.value)}
        />
        <button onClick={handleQuestionSubmit}>Submit</button>
      </div>
    </div>
  );
}

export default FAQ;
