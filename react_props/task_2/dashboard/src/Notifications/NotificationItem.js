import React from 'react';
import './Notifications.css';

 function NotificationItem({ type, html, value }) {
    if (html) {
      return (
        <li className={type} data-notification-type={type} dangerouslySetInnerHTML={html} />
      );
    } else {
      return (
        <li className={type} data-notification-type={type}>
          {value}
        </li>
      );
    }
}
export default NotificationItem;