import React from 'react';
import ReactDOM from 'react-dom/client';
import './../CSS/Right.css'
import Navbar from './Navbar';
import RegMenu from './RegMenu';

export default function Right(){
    return (
    <div className='Right'>
        <div className="right--navbar">
            <Navbar/>
        </div>
        <div className="right--loginmenu">
            <RegMenu/>
        </div>

    </div> )
};