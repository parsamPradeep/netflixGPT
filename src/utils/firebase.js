// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD6oOUArFC_e_woEs1DGvfHH2IHcYdC0Cc",
  authDomain: "netflixgpt-69c50.firebaseapp.com",
  projectId: "netflixgpt-69c50",
  storageBucket: "netflixgpt-69c50.appspot.com",
  messagingSenderId: "807094693923",
  appId: "1:807094693923:web:d33511f34252b8a19dc196",
  measurementId: "G-DPPD65SYJY",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
