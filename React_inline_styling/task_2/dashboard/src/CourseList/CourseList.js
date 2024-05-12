import React from 'react';
import CourseListRow from './CourseListRow';
import { StyleSheet, css } from 'aphrodite';
import PropTypes from 'prop-types';
import CourseShape from './CourseShape';

function CourseList({ listCourses = [] }) {
    return (
        <table className= {css(styles.table)}>
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
    )
}
CourseList.propTypes = {
    listCourses: PropTypes.arrayOf(CourseShape).isRequired, // Define propTypes
};
const styles = StyleSheet.create({
    table: {
      width: '100%',
      borderCollapse: 'collapse',
      border: '1px solid #020202',
    },
    tableHeaderCell: {
      padding: '8px',
      textAlign: 'center',
      border: '1px solid #020202',
      borderBottom: 'none !important',
    },
    tableBodyCell: {
      padding: '8px',
      textAlign: 'left',
      border: '1px solid #020202',
    },
    tableBodyRow: {
      textAlign: 'left',
      ':hover': {
        backgroundColor: '#ddd',
      },
    },
  });
  
export default CourseList;