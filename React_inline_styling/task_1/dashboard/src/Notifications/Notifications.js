import React, { Component } from 'react';
import PropTypes from 'prop-types';
import NotificationItem from './NotificationItem';
import { StyleSheet, css } from 'aphrodite';


const NotificationItemShape = PropTypes.shape({
  id: PropTypes.number.isRequired,
  html: PropTypes.shape({ __html: PropTypes.string }).isRequired,
  type: PropTypes.string.isRequired,
  value: PropTypes.string,
});

class Notifications extends Component {
  handleButtonClick = () => {
    console.log('Close button has been clicked');
  };

  markAsRead = (id) => {
    console.log(`Notification ${id} has been marked as read`);
  };

  shouldComponentUpdate(nextProps) {
    // Only update if the length of listNotifications changes
    return nextProps.listNotifications.length !== this.props.listNotifications.length;
  }

  render() {
    const { displayDrawer = true, listNotifications = [] } = this.props;

    return (
      <div>
        <div className={css(styles.menuItem)}>
          Your Notifications
        </div>
        {displayDrawer && (
          <div className={css(styles.notifications)}>
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
              onClick={this.handleButtonClick}
            >
              X
            </button>
            {listNotifications.length > 0 && <p>Here is the list of notifications</p>}
            <ul>
              {listNotifications.length > 0 ? (
                listNotifications.map(notification => (
                  <li key={notification.id}>
                    <NotificationItem
                      type={notification.type}
                      html={notification.html}
                      value={notification.value}
                      markAsRead={this.markAsRead}
                    />
                  </li>
                ))
              ) : (
                <p>No new notification for now</p>
              )}
            </ul>
          </div>
        )}
      </div>
    );
  }
}

Notifications.propTypes = {
  displayDrawer: PropTypes.bool.isRequired,
  listNotifications: PropTypes.arrayOf(NotificationItemShape),
};

const styles = StyleSheet.create({
  notifications: {
    marginTop: '30px',
    marginBottom: '20px',
    border: '2px dashed #dc1010',
    padding: '20px',
  },
  default: {
    color: 'blue',
  },
  urgent: {
    color: 'red',
  },
  menuItem: {
    position: 'absolute',
    top: '0',
    right: '0',
    paddingTop: '10px',
    paddingRight: '30px',
    color: 'black',
    cursor: 'pointer',
    borderRadius: '5px',
  },
});

export default Notifications;
