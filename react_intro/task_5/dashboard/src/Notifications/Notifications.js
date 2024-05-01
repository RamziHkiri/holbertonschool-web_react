import React from 'react'
import './Notifications.css'
import { getLatestNotification } from '../utils/utils'

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
          <li className="default" data-priority="default">New course available</li>
          <li className="urgent" data-priority="urgent">New resume available</li>
          <li className="urgent" data-priority="urgent" dangerouslySetInnerHTML={{ __html: getLatestNotification() }}></li>
        </ul>
      </ul>

    </div>
  )
}
export default Notifications;
