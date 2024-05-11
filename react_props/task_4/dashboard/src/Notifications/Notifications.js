import React from 'react';
import PropTypes from 'prop-types';
import { getLatestNotification } from '../utils/utils';
import NotificationItem from './NotificationItem';
import './Notifications.css';
function Notifications({ displayDrawer = true }) {
  const handleButtonClick = () => {
    console.log('Close button has been clicked')
  }
  return (
    <div>
      <div className="menuItem">
        Your Notifications
      </div>
      { displayDrawer &&
      <div className='Notifications'>
        <button
          style={{
            position: 'absolute',
            top: 0,
            right: 0,
            padding: '65px 40px',
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
            <NotificationItem type='default' value='New course available' />
            <NotificationItem type='urgent' value='New resume available' />
            <NotificationItem type='urgent' html={{ __html: getLatestNotification() }} value='New resume available' />
          </ul>
        </ul>

      </div>
      }
    </div>
  )
}
Notifications.propTypes = {
  displayDrawer: PropTypes.bool.isRequired,

}
export default Notifications;
