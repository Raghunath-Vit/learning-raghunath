import { useState,useEffect } from "react";
import "./App.css";
import Form from "./components/common/Form";
import Home from "./components/Home";
import { Routes, Route, useNavigate } from "react-router-dom";
import { app } from "./firebase-config";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {
  getAuth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
} from "firebase/auth";
function App() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  let navigate = useNavigate();
  useEffect(() => {
    let authToken = sessionStorage.getItem('Auth Token')
    if (authToken) {
    navigate('/home')
    }
    }, [])
 
const handleAction = (id) => {
  const authentication = getAuth();

  if (id === 1) {
    signInWithEmailAndPassword(authentication, email, password)
      .then((response) => {
        navigate('/home');
        sessionStorage.setItem('Auth Token', response._tokenResponse.refreshToken);
      })
      .catch((error) => {
        switch (error.code) {
          case 'auth/wrong-password':
            toast.error('Incorrect password. Please try again.');
            break;
          case 'auth/user-not-found':
            toast.error('No user found with this email.');
            break;
          case 'auth/invalid-email':
            toast.error('Invalid email address.');
            break;
          default:
            toast.error('An error occurred. Please try again.');
        }
      });
  } else if (id === 2) {
    createUserWithEmailAndPassword(authentication, email, password)
      .then((response) => {
        navigate('/home');
        sessionStorage.setItem('Auth Token', response._tokenResponse.refreshToken);
      })
      .catch((error) => {
        switch (error.code) {
          case 'auth/email-already-in-use':
            toast.error('Email is already in use.');
            break;
          case 'auth/invalid-email':
            toast.error('Invalid email address.');
            break;
          case 'auth/weak-password':
            toast.error('Password should be at least 6 characters.');
            break;
          default:
            toast.error('An error occurred. Please try again.');
        }
      });
  }
};
  return (
    <div className="App">
      <ToastContainer />
      <>
        <Routes>
          <Route
            path="/login"
            element={
              <Form
                title="Login"
                setEmail={setEmail}
                setPassword={setPassword}
                handleAction={() => handleAction(1)}
              />
            }
          />
          <Route
            path="/register"
            element={
              <Form
                title="Register"
                setEmail={setEmail}
                setPassword={setPassword}
                handleAction={() => handleAction(2)}
              />
            }
          />
          <Route path="/home" element={<Home />} />
        </Routes>
      </>
    </div>
  );
}
export default App;
