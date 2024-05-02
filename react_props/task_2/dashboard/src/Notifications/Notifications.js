import React from 'react';
import { getLatestNotification } from '../utils/utils';
import NotificationItem from './NotificationItem';
import './Notifications.css';
function Notifications() {
  const handleButtonClick = () => {
    console.log('Close button has been clicked')
  }
  return (
    <div className='Notifications'>
      <button
        style={{
          position: 'absolute',
          top: 0,
          right: 0,
          padding: '15px 20px',
          backgroundColor: 'transparent',
          color: 'black',
          border: 'none',
          borderRadius: '5px',
          cursor: 'pointer',
          display: 'flex',
          alignItems: 'center',
        }}
        aria-label="Close"
        onClick={handleButtonClick}
      >
        X
      </button>
      <p>Here is the list of notifications</p>
      <ul>
        <ul>
          <NotificationItem type='urgent' value='New course available' />
          <NotificationItem type='urgent' value='New resume available' />
          <NotificationItem type='urgent' html={{ __html: getLatestNotification() }} value='New resume available' />
        </ul>
      </ul>

    </div>
  )
}
export default Notifications;
