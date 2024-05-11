import React from 'react';
import { shallow } from 'enzyme'; // Import shallow renderer from Enzyme
import Login from './Login'; // Import the Login component
import './Login.css';

describe('Login component', () => {
    it('renders without crashing', () => {
        shallow(<Login />); // Shallow render the Login component
    });

    it('renders 2 input tags and 2 label tags', () => {
        const wrapper = shallow(<Login />); // Shallow render the Login component
        // Check if there are 2 input tags
        expect(wrapper.find('input')).toHaveLength(2);
        // Check if there are 2 label tags
        expect(wrapper.find('label')).toHaveLength(2);
    });
});
