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
});
