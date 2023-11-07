import React from 'react';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Header from './components/pages/pages/Home'; 
import Menu from './components/pages/pages/Menu'
import Progress from './components/pages/pages/progress';
import Login from "./components/pages/pages/Login";
import SignUp from "./components/pages/pages/Signup";
import Terms from './components/pages/pages/Terms';
import Settings from './components/pages/pages/Settings'
import FAQ from './components/pages/pages/Faq';
import History from './components/pages/pages/history';

function App() {
  return (
    <Router>
    <Routes>
      <Route path="/" element={<Header />} /> 
      <Route path="/login" element={<Login/>}/>
      <Route path="/signup" element={<SignUp />} />
      <Route path="/menu" element={<Menu />} />
      <Route path="/progress" element={<Progress />} />
      <Route path="/terms" element={<Terms />} />
      <Route path="/settings" element={<Settings/>} />
      <Route path="/faq" element={<FAQ/>} />
      <Route path="/history" element={<History/>} />
    </Routes>
  </Router>
  );
}

export default App;
