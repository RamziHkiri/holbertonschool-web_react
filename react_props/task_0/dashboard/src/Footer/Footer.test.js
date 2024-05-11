import React from 'react';
import { shallow } from 'enzyme';
import Footer from './Footer';

test('renders App component without crashing', () => {
  const wrapper = shallow(<Footer />);
  expect(wrapper.exists()).toBe(true);
});
test('renders App component with App-footer div', () => {
  const wrapper = shallow(<Footer />);
  const appFooterDiv = wrapper.find('.App-footer');
  expect(appFooterDiv.exists()).toBe(true);
});