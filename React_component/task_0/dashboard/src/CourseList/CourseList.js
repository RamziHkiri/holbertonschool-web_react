import React from 'react';
import CourseListRow from './CourseListRow';
import './CourseList.css'; // Assuming this path is correct
import PropTypes from 'prop-types';
import CourseShape from './CourseShape';

function CourseList({ listCourses = [] }) {
    return (
        <table>
            <thead>
                <CourseListRow isHeader={true} textFirstCell="Available courses" />
                <CourseListRow isHeader={true} textFirstCell="Course name" textSecondCell="Credit" />
            </thead>
            <tbody>
            {listCourses.length > 0 ? (
                    listCourses.map(course => (
                        <CourseListRow
                            key={course.id}
                            isHeader={false}
                            textFirstCell={course.name}
                            textSecondCell={course.credit.toString()}
                        />
                    ))
                ) : (
                    <CourseListRow isHeader={false} textFirstCell="No course available yet" />
                )}
            </tbody>
        </table>
    );
}

CourseList.propTypes = {
    listCourses: PropTypes.arrayOf(CourseShape).isRequired,
};

export default CourseList;
