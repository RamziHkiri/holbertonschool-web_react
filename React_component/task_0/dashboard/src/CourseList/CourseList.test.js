import React from 'react';
import { shallow } from 'enzyme';
import CourseList from './CourseList';
import CourseListRow from './CourseListRow';

describe('CourseList Component', () => {
  describe('With listCourses Empty', () => {
    let wrapper;
    beforeEach(() => {
      wrapper = shallow(<CourseList />);
    });

    it('renders correctly with empty listCourses or no listCourses passed', () => {
      expect(wrapper.find(CourseListRow)).toHaveLength(1); // One row for "Available courses"
      expect(wrapper.contains(<CourseListRow isHeader={false} textFirstCell="No course available yet" />)).toBe(true);
    });
  });

  describe('With listCourses containing elements', () => {
    const listCourses = [
      { id: 1, name: 'ES6', credit: 60 },
      { id: 2, name: 'Webpack', credit: 20 },
      { id: 3, name: 'React', credit: 40 },
    ];
    let wrapper;
    beforeEach(() => {
      wrapper = shallow(<CourseList listCourses={listCourses} />);
    });

    it('renders listCourses correctly with the right number of CourseListRow', () => {
      expect(wrapper.find(CourseListRow)).toHaveLength(listCourses.length + 1); // Plus one for "Available courses" header row
    });
  });
});
