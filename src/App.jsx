import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/pages/pages/Home'; 
import Menu from './components/pages/pages/Menu'
function App() {
  return (
    <Router>
      <div className="app">
        <Header />      
      
        <Menu/>
      </div>
    </Router>
  );
}

export default App;
