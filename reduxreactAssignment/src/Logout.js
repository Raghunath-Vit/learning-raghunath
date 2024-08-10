import './App.css'
import React from 'react';

const Logout = ({ onLogout }) => {
  return (
    <div className='LogoutClass'>
      <h2>Welcome Back! Munna Bhaiyaa</h2>

      <h2>Logout Button</h2>
      <button onClick={onLogout}>Logout</button>
    </div>
  );
};

export default Logout;

