// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCxALzBXkZrf6PSyhvBwlw0Ui1WhplnM5k",
  authDomain: "my-workout-tracker-app.firebaseapp.com",
  projectId: "my-workout-tracker-app",
  storageBucket: "my-workout-tracker-app.appspot.com",
  messagingSenderId: "677846064558",
  appId: "1:677846064558:web:d35a7a733746577aecfc3f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth }; 