import React from 'react';
import PropTypes from 'prop-types';
import './Notifications.css';

function NotificationItem({ type = 'default', html, value }) {
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

NotificationItem.propTypes = {
    type: PropTypes.string.isRequired,
    html: PropTypes.shape({
        __html: PropTypes.string.isRequired
    }),
    value: PropTypes.string.isRequired
};

export default NotificationItem;
