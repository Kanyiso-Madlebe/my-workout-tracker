import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/pages/pages/Home'; 

function App() {
  return (
    <Router>
      <div className="app">
        <Header />      

      </div>
    </Router>
  );
}

export default App;
