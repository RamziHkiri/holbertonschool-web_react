import React, { memo } from 'react';
import PropTypes from 'prop-types';
import './Notifications.css';

const NotificationItem = memo(({ id, type = 'default', html, value, markAsRead }) => {
  const handleClick = () => {
    if (markAsRead) {
      markAsRead(id);
    }
  };
const notif = [{id:0,type: 'default'}]
  if (html) {
    return (
      <li className={type} data-notification-type={type} dangerouslySetInnerHTML={html} onClick={handleClick} />
    );
  } else {
    return (
      <li className={type} data-notification-type={type} onClick={handleClick}>
        {value}
      </li>
    );
  }
});

NotificationItem.propTypes = {
  id: PropTypes.number.isRequired,
  type: PropTypes.string,
  html: PropTypes.shape({
    __html: PropTypes.string.isRequired
  }),
  value: PropTypes.string.isRequired,
  markAsRead: PropTypes.func.isRequired,
};

NotificationItem.defaultProps = {
  type: 'default',
};

export default NotificationItem;
