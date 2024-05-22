import React from 'react';
import PropTypes from 'prop-types';
import BodySection from './BodySection';
import { css } from 'aphrodite';

const BodySectionWithMarginBottom = ({ title, children }) => {
  return (
    <div className={css(styles.BodySection)}>
      <BodySection title={title}>{children}</BodySection>
    </div>
  );
};

BodySectionWithMarginBottom.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node,
};
const styles = StyleSheet.create({
  bodySectionWithMargin: {
    marginBottom: '100px'
  }
}); 

export default BodySectionWithMarginBottom;
