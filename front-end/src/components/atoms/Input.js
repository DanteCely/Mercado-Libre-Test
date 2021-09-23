import React from 'react';
import PropTypes from 'prop-types';

export const Input = (props) => {
  return <input {...props} />;
};

Input.prototype = {
  type: PropTypes.string,
  'aria-label': PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func,
  onKeyPress: PropTypes.func,
};

Input.defaultProps = {
  type: 'text',
};
