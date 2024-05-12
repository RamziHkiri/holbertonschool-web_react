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
            className={css(styles.button)}
              aria-label="Close"
              onClick={this.handleButtonClick}
            >
              X
            </button>
            {listNotifications.length > 0 && <p>Here is the list of notifications</p>}
            <ul className={css(styles.ul)}>
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
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    margin: 0,
    padding: 0,
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
    zIndex: 9999,
  },
  ul: {
    padding: 0,
    fontSize: '20px',
  },
  menuItem: {
    position: 'absolute',
    top: 0,
    right: 0,
    paddingTop: '10px',
    paddingRight: '30px',
    color: 'black',
    cursor: 'pointer',
    borderRadius: '5px',
  },
});


export default Notifications;
