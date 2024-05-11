import React from 'react';
import holberton from '../assets/holberton.jpg';
import './Header.css';

 function Header() {
  return (
    <div className="App-header" >
        <img src={holberton} className="App-logo" alt="logo" />
        <h1>School dashboard</h1>
      </div>
  )
}
export default Header;