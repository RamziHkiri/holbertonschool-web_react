import React from 'react';
import { shallow } from 'enzyme';
import CourseListRow from './CourseListRow';

describe('CourseListRow Component', () => {
  describe('when isHeader is true', () => {
    it('renders one cell with colspan = 2 when textSecondCell does not exist', () => {
      const wrapper = shallow(<CourseListRow isHeader={true} textFirstCell="Header Cell" />);
      expect(wrapper.find('th')).toHaveLength(1);
      expect(wrapper.find('th').prop('colSpan')).toEqual('2');
      expect(wrapper.text()).toEqual('Header Cell');
    });

    it('renders two cells when textSecondCell is present', () => {
      const wrapper = shallow(
        <CourseListRow isHeader={true} textFirstCell="Header Cell 1" textSecondCell="Header Cell 2" />
      );
      expect(wrapper.find('th')).toHaveLength(2);
      expect(wrapper.text()).toContain('Header Cell 1');
      expect(wrapper.text()).toContain('Header Cell 2');
    });
  });

  describe('when isHeader is false', () => {
    it('renders two td elements within a tr element', () => {
      const wrapper = shallow(
        <CourseListRow isHeader={false} textFirstCell="Data Cell 1" textSecondCell="Data Cell 2" />
      );
      expect(wrapper.find('td')).toHaveLength(2);
      expect(wrapper.text()).toContain('Data Cell 1');
      expect(wrapper.text()).toContain('Data Cell 2');
    });
  });
});
