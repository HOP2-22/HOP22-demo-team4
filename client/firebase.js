// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDVWPMAaEEApMZcbzZepasAwJJ2jK7_y8U",
  authDomain: "swapzone4.firebaseapp.com",
  projectId: "swapzone4",
  storageBucket: "swapzone4.appspot.com",
  messagingSenderId: "801497244165",
  appId: "1:801497244165:web:127d0023510dfa9fc1f26c",
  measurementId: "G-HRF9MC7785",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
