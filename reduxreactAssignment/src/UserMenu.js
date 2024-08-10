import './App.css';
import React from 'react';
import { Link } from 'react-router-dom';

const UserMenu = ({isLoggedIn}) => {
  return (
    isLoggedIn && <div className='UserMenuClass'>
      <nav>
        <Link to="/profile" className='links'>Profile</Link>
        <Link to="/userinfo" className='links'>Userinfo</Link>
      </nav>
    </div>
  );
};

export default UserMenu;

