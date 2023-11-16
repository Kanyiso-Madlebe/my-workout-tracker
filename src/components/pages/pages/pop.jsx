import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/pop.css';

const SignUpPopUp = ({ onClose }) => (
  <div className="pop show">
    <p>You've created the account successfully!</p>
    <p>now <Link to="/login">login</Link></p>
    <Link to="/signup"><button onClick={onClose} className="button">
      Close
    </button></Link>
  </div>
);

export default SignUpPopUp;
