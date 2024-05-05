import React from 'react';
import { shallow } from 'enzyme';
import NotificationItem from './NotificationItem';

describe('NotificationItem component', () => {
  it('renders without crashing', () => {
    shallow(<NotificationItem />);
  });

  it('renders the correct HTML when type and value props are passed', () => {
    const wrapper = shallow(<NotificationItem type='default' value='test' />);
    expect(wrapper.find('li').text()).toEqual('test');
    expect(wrapper.find('li').hasClass('default')).toEqual(true);
  });

  it('renders the correct HTML when html prop is passed', () => {
    const wrapper = shallow(<NotificationItem html={{ __html: '<u>test</u>' }} />);
    expect(wrapper.find('li').html()).toEqual('<li><u>test</u></li>');
  });
  it('calls markAsRead function with the correct ID when clicked', () => {
    const mockMarkAsRead = jest.fn();
    const notificationId = 123;
    const wrapper = shallow(
      <NotificationItem
        id={notificationId}
        markAsRead={mockMarkAsRead}
      />
    );

    wrapper.find('li').simulate('click');
    expect(mockMarkAsRead).toHaveBeenCalledWith(notificationId);
  });
});
