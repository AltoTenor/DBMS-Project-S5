import React from 'react';
import ReactDOM from 'react-dom/client';
import "./../CSS/Heading.css"
import logo from './../../assets/nitcwhite.png'

export default function Header() {
  return (
    <div className="head">
        <div>
            <img id="logo" src={logo} alt='Logo' />
        </div>
        <div className="heading">
            <b> NITClub  <br/> and Event Manager </b>
        </div>
    </div>
  );
};
