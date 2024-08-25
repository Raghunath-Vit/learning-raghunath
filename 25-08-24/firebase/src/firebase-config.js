// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD1AvrOvdWtPMIlDthwBLHJofQH5kHSN20",
  authDomain: "react-register-a0562.firebaseapp.com",
  projectId: "react-register-a0562",
  storageBucket: "react-register-a0562.appspot.com",
  messagingSenderId: "657616396292",
  appId: "1:657616396292:web:509fc153fc8695027c9551",
  measurementId: "G-W3MLDLGX0W"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);