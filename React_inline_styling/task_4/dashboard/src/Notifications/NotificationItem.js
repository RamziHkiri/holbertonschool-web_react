import React, { memo } from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, css } from 'aphrodite';
const NotificationItem = memo(({ id, type = 'default', html, value, markAsRead }) => {
  const handleClick = () => {
    if (markAsRead) {
      markAsRead(id);
    }
  };
const notif = [{id:0,type: 'default'}]
  if (html) {
    return (
      <li className={css(styles.type)} data-notification-type={type} dangerouslySetInnerHTML={html} onClick={handleClick} />
    );
  } else {
    return (
      <li className={css(styles.type)} data-notification-type={type} onClick={handleClick}>
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
const styles = StyleSheet.create({
  default: {
    color: 'blue',
  },
  urgent: {
    color: 'red',
  }
});

export default NotificationItem;
