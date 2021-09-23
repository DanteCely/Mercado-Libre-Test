import React from 'react';
import PropTypes from 'prop-types';

export const Button = (props) => {
  const { type, className, onClick, children } = props;
  const propsButton = { type, className, onClick };

  return <button {...propsButton}>{children}</button>;
};

Button.prototype = {
  type: PropTypes.string,
  className: PropTypes.string,
  onClick: PropTypes.func,
  children: PropTypes.node,
};

Button.defaultProps = {
  type: 'button',
};
