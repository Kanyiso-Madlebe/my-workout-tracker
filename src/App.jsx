import React from 'react';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Header from './components/pages/pages/Home'; 
import Menu from './components/pages/pages/Menu'
import Progress from './components/pages/pages/progress';
import Login from "./components/pages/pages/Login";
import SignUp from "./components/pages/pages/Signup";

function App() {
  return (
    <Router>
    <Routes>
      <Route path="/" element={<Header />} /> 
      <Route path="/login" element={<Login/>}/>
      <Route path="/signup" element={<SignUp />} />
      <Route path="/menu" element={<Menu />} />
      <Route path="/progress" element={<Progress />} />
    </Routes>
  </Router>
  );
}

export default App;
