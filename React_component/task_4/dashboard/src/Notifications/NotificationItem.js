import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Notifications.css';

class NotificationItem extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    const { markAsRead, id } = this.props;
    if (markAsRead) {
      markAsRead(id);
    }
  }

  render() {
    const { type = 'default', html, value } = this.props;

    if (html) {
      return (
        <li className={type} data-notification-type={type} dangerouslySetInnerHTML={html} onClick={this.handleClick} />
      );
    } else {
      return (
        <li className={type} data-notification-type={type} onClick={this.handleClick}>
          {value}
        </li>
      );
    }
  }
}

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
