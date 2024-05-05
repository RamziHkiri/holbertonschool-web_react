import React from 'react';
import { shallow } from 'enzyme';
import Notifications from './Notifications';
import NotificationItem from './NotificationItem';

describe('Notifications component', () => {
  it('renders NotificationItem elements', () => {
    const wrapper = shallow(<Notifications />);
    expect(wrapper.find(NotificationItem)).toHaveLength(3);
  });

  it('renders the correct HTML for the first NotificationItem element', () => {
    const wrapper = shallow(<Notifications />);
    const firstNotificationItem = wrapper.find(NotificationItem).first();
    expect(firstNotificationItem.prop('type')).toEqual('default');
    expect(firstNotificationItem.prop('value')).toEqual('New course available');
  });

  it('displays the menu item when displayDrawer is false', () => {
    const wrapper = shallow(<Notifications displayDrawer={false} />);
    expect(wrapper.find('.menuItem')).toHaveLength(1);
  });

  it('does not display the div.Notifications when displayDrawer is false', () => {
    const wrapper = shallow(<Notifications displayDrawer={false} />);
    expect(wrapper.find('div.Notifications')).toHaveLength(0);
  });

  it('displays the menu item when displayDrawer is true', () => {
    const wrapper = shallow(<Notifications displayDrawer={true} />);
    expect(wrapper.find('.menuItem')).toHaveLength(1);
  });

  it('displays the div.Notifications when displayDrawer is true', () => {
    const wrapper = shallow(<Notifications displayDrawer={true} />);
    expect(wrapper.find('div.Notifications')).toHaveLength(1);
  });
  it('renders correctly with empty listNotifications or no listNotifications passed', () => {
    const wrapper = shallow(<Notifications />);
    expect(wrapper.find('.Notifications').exists()).toBe(true);
    expect(wrapper.find(NotificationItem).exists()).toBe(false);
    expect(wrapper.contains(<p>No new notification for now</p>)).toBe(true);
  });

  it('renders listNotifications correctly with the right number of NotificationItem', () => {
    const listNotifications = [
      {
        id: 1,
        html: { __html: '<div>Notification 1</div>' },
        type: 'default',
        value: 'Notification 1',
      },
      {
        id: 2,
        html: { __html: '<div>Notification 2</div>' },
        type: 'urgent',
        value: 'Notification 2',
      },
    ];
    const wrapper = shallow(<Notifications listNotifications={listNotifications} />);
    expect(wrapper.find('.Notifications').exists()).toBe(true);
    expect(wrapper.find(NotificationItem)).toHaveLength(2);
    expect(wrapper.contains(<p>Here is the list of notifications</p>)).toBe(true);
  });

  it('does not display "Here is the list of notifications" when listNotifications is empty', () => {
    const wrapper = shallow(<Notifications />);
    expect(wrapper.contains(<p>Here is the list of notifications</p>)).toBe(false);
    expect(wrapper.contains(<p>No new notification for now</p>)).toBe(true);
  });
  it('calls markAsRead function with correct message when a notification is marked as read', () => {
    const listNotifications = [
      {
        id: 1,
        html: { __html: '<div>Notification 1</div>' },
        type: 'default',
        value: 'Notification 1',
      }
    ];

    const mockMarkAsRead = jest.fn();
    const consoleSpy = jest.spyOn(console, 'log');

    const wrapper = shallow(
      <Notifications
        listNotifications={listNotifications}
        markAsRead={mockMarkAsRead}
      />
    );
    wrapper.find(NotificationItem).simulate('click');
    expect(mockMarkAsRead).toHaveBeenCalledWith(1);
    expect(consoleSpy).toHaveBeenCalledWith('Notification 1 has been marked as read');
    consoleSpy.mockRestore();
  });
});
