import React from 'react';
import ReactDOM from 'react-dom/client';
import "./Heading.css"
import logo from './assets/logo.png'

export default function Header() {
  return (
    <div className="head">
        <div>
            <img id="logo" src={logo} alt='Logo' />
        </div>
        <div className="heading">
            NITClub  <br/> and Event Manager 
        </div>
    </div>
  );
};
