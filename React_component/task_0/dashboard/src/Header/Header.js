import React from 'react';
import './Header.css';
import Notifications from '../Notifications/Notifications';
import holberton from '../assets/holberton.jpg';

function Header() {
  return (
    <div className="App-header">
      <div>
        <img src={holberton} className="App-logo" alt="logo" />
        <h1>School dashboard</h1>
      </div>
      <Notifications displayDrawer={true} listNotifications={[]} />
    </div>
  );
}

export default Header;
