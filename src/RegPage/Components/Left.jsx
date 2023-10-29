import React from 'react';
import ReactDOM from 'react-dom/client';
import './../CSS/Left.css';
import Heading from './Heading';
import Footer from './Footer' ;

export default function Left(){
    return (
    <div className='Left'>
        <Heading/>
        <Footer/>
    </div> )
};