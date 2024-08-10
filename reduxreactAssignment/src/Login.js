import "./App.css"
import React from 'react';

const Login = ({ onLogin }) => {
  return (
    <div className='LoginClass'>
      <h2>Login Page</h2>
      <button onClick={() => onLogin(true)}>Login</button>
    </div>
  );
};

export default Login;
