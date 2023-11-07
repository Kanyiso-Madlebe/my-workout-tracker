import React from 'react';
import { Link } from 'react-router-dom'; // Make sure to import Link from react-router-dom
import '../styles/terms.css';

function TermsPage() {
  return (
    <div className="terms-container">
      <Link to="/menu" className="b-arrow">
        &#8592; 
      </Link>
      <h1>DGC Workout Tracker App - Terms and Conditions</h1>

      <p>
        Welcome to the DGC Workout Tracker App! We're excited to have you as a user and appreciate your commitment to achieving your fitness goals. Before you start using our app, please take a moment to review our Terms and Conditions to ensure a smooth and enjoyable experience.
      </p>

      <p>By using the DGC Workout Tracker App, you agree to the following terms and conditions:</p>

      <ol>
        <li>
          <strong>Acceptance of Terms</strong> - By accessing or using the DGC Workout Tracker App, you acknowledge that you have read, understood, and accepted these terms and conditions, our Privacy Policy, and any other policies or guidelines we may provide. If you do not agree with any part of these terms, please do not use our app.
        </li>
        <li>
          <strong>User Registration</strong> - To use certain features of the app, you may be required to create a user account. You are responsible for maintaining the confidentiality of your account credentials and for all activities that occur under your account.
        </li>
        <li>
          <strong>Privacy</strong> - We take your privacy seriously. Please review our Privacy Policy to understand how we collect, use, and protect your personal information.
        </li>
        <li>
          <strong>Use of the App</strong> - You agree to use the DGC Workout Tracker App only for lawful and fitness-related purposes. You shall not engage in any activities that are harmful, unethical, or illegal.
        </li>
        <li>
          <strong>User-Generated Content</strong> - The app may allow you to submit or share content, such as workout plans or fitness tips. By doing so, you grant us a non-exclusive, worldwide, royalty-free license to use, display, and distribute your content within the app. You retain ownership of your content.
        </li>
        <li>
          <strong>Prohibited Activities</strong> - You must not engage in any of the following activities:
          <ul>
            <li>Using the app for any unlawful purpose.</li>
            <li>Attempting to interfere with the functionality of the app.</li>
            <li>Using the app in any way that could harm or negatively impact other users.</li>
            <li>Uploading or sharing any content that is offensive, discriminatory, or violates the rights of others.</li>
          </ul>
        </li>
        <li>
          <strong>Modification and Termination</strong> - We reserve the right to modify or discontinue the DGC Workout Tracker App, with or without notice, at any time. We may also terminate your access to the app if you violate these terms and conditions.
        </li>
        <li>
          <strong>Disclaimer</strong> - The DGC Workout Tracker App is provided "as is" without any warranties, express or implied. We do not guarantee the accuracy, reliability, or availability of the app.
        </li>
        <li>
          <strong>Limitation of Liability</strong> - In no event shall DGC or its affiliates be liable for any direct, indirect, incidental, special, or consequential damages arising from your use of the app.
        </li>
        <li>
          <strong>Governing Law</strong> - These terms and conditions are governed by and construed in accordance with the laws of DGC.
        </li>
        <li>
          <strong>Contact Us</strong> - If you have any questions or concerns about these terms and conditions or the DGC Workout Tracker App, please contact us at <a href="tel:0647473024">0647473024</a>.
        </li>
      </ol>

      <p>
        By using the DGC Workout Tracker App, you agree to abide by these terms and conditions. We encourage you to stay updated with any changes to these terms by checking this page periodically. Thank you for choosing DGC as your fitness partner! We're here to help you achieve your fitness goals and lead a healthier life.
      </p>
    </div>
  );
}

export default TermsPage;
