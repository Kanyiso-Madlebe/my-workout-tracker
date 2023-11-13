import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import '../styles/otp.css';

function OTPPage() {
  const [otp, setOTP] = useState('');
  const [password, setPassword] = useState('');
  const [confirmationPassword, setConfirmationPassword] = useState('');
  const [verificationSuccessful, setVerificationSuccessful] = useState(false);
  const [otpSent, setOTPSent] = useState(false);
  const [phoneNumber, setPhoneNumber] = useState('');

  const generateRandomOTP = () => {
    const randomOTP = Math.floor(100000 + Math.random() * 900000);
    setOTP(randomOTP.toString());
  };

  const handleResendOTP = () => {
    generateRandomOTP();
    setOTPSent(true);
  };

  const handlePhoneNumberChange = (event) => {
    setPhoneNumber(event.target.value);
  };

  const handleOTPChange = (event) => {
    const value = event.target.value;
    if (/^\d{0,6}$/.test(value)) {
      setOTP(value);
    }
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleConfirmationPasswordChange = (event) => {
    setConfirmationPassword(event.target.value);
  };

  const handleSendOTP = () => {
    if (phoneNumber) {
      generateRandomOTP();
  
      axios.post('http://localhost:5173/api/otp', { phoneNumber })
        .then((response) => {
          console.log('OTP sent successfully', response);
          setOTPSent(true);
        })
        .catch((error) => {
          console.error('Failed to send OTP:', error);
          if (error.response) {
            console.error('Response status:', error.response.status);
            console.error('Response data:', error.response.data);
            console.error('Response headers:', error.response.headers);
          }
          // Handle error scenarios and display appropriate feedback to the user
        });
    }
  };

  const handleVerifyOTP = () => {
    // Implement OTP verification logic here
    // You need to verify the entered OTP, and if it's correct, setVerificationSuccessful(true)
    // If the OTP is incorrect, handle that scenario accordingly.
  };

  const handleSubmitNewPassword = () => {
    // Implement password submission logic here
    // You should check if the password and confirmation match, and if they do, submit the new password to the server.
    // If there are any errors, handle them accordingly.
  };

  return (
    <div className="bg-con">
      <div className="contain">
        <h2>OTP Verification</h2>
        {verificationSuccessful ? (
          <div>
            <p>Enter your new password:</p>
            <input
              type="password"
              value={password}
              onChange={handlePasswordChange}
              placeholder="Enter new password"
            />
            <p>Confirm your new password:</p>
            <input
              type="password"
              value={confirmationPassword}
              onChange={handleConfirmationPasswordChange}
              placeholder="Confirm new password"
            />
            <button onClick={handleSubmitNewPassword}>Submit</button>
          </div>
        ) : (
          <div>
            <p>Enter your phone number to receive OTP:</p>
            <input
              type="text"
              value={phoneNumber}
              onChange={handlePhoneNumberChange}
              placeholder="Enter phone number"
            />
            <button onClick={handleSendOTP}>Send OTP</button>
            {otpSent && (
              <div>
                <p>We will send you a one-time password to {phoneNumber}:</p>
                <input
                  type="text"
                  value={otp}
                  onChange={handleOTPChange}
                  placeholder="Enter OTP"
                />
                <button onClick={handleVerifyOTP}>Verify OTP</button>
                <button onClick={handleResendOTP}>Resend OTP</button>
              </div>
            )}
            <p>
              {otpSent ? (
                <span>
                  OTP sent! Do not receive OTP? <Link to="/forgot-password">Resend OTP</Link>
                </span>
              ) : (
                <span>OTP not sent.</span>
              )}
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

export default OTPPage;
