import React from 'react';
import { NavLink } from "react-router-dom";
import "./Navbar.css";

const Navbar:React.FC = () => {
  return (
    <>
      <div className='navouter'>
        <h2>Navbar</h2>
        <ul className='navul'>
          
          <li className='navli'><NavLink to="/" className={({isActive})=>isActive?"live":"notlive"}>Home</NavLink></li>
          <li className='navli'><NavLink to="/todo" className={({isActive})=>isActive?"live":"notlive"}>Todo</NavLink></li>
          <li className='navli'><NavLink to="/counter" className={({isActive})=>isActive?"live":"notlive"}>Counter</NavLink></li>
          <li className='navli'><NavLink to="/param/:id" className={({isActive})=>isActive?"live":"notlive"}>ParamExample</NavLink></li>
        </ul>
      </div>
    </>
  )
}

export default Navbar
