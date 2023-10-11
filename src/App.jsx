import React from 'react';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Header from './components/pages/pages/Home'; 
import Menu from './components/pages/pages/Menu'
import Progress from './components/pages/pages/progress';

function App() {
  return (
    <Router>
    <Routes>
      <Route path="/" element={<Header />} /> 
      <Route path="/menu" element={<Menu />} />
      <Route path="/progress" element={<Progress />} />
    </Routes>
  </Router>
  );
}

export default App;
