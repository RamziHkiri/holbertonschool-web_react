import React from 'react';
import { shallow } from 'enzyme';
import App from './App';
import Notifications from '../Notifications/Notifications';
import Header from '../Header/Header';
import Login from '../Login/Login';
import Footer from '../Footer/Footer';

describe('App Component', () => {
  it('should contain the Notifications component', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find(Notifications).exists()).toBe(true);
  });

  it('should contain the Header component', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find(Header).exists()).toBe(true);
  });

  it('should contain the Login component', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find(Login).exists()).toBe(true);
  });

  it('should contain the Footer component', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find(Footer).exists()).toBe(true);
  });
  it('calls logOut function when control and h keys are pressed', () => {
    const mockLogOut = jest.fn();
    const { container } = render(<App isLoggedIn={true} logOut={mockLogOut} />);

    fireEvent.keyDown(container, { key: 'h', ctrlKey: true });

    expect(mockLogOut).toHaveBeenCalled();

    expect(window.alert).toHaveBeenCalledWith('Logging you out');
  });
});
