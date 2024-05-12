import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, css } from 'aphrodite';


const BodySection = ({ title, children }) => {
  return (
    <div className={css(styles.BodySection)}>
      <h2>{title}</h2>
      {children}
    </div>
  );
};

BodySection.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node,
};
const styles = StyleSheet.create({
  BodySection: {
    padding: '20px'
  }
});

export default BodySection;
