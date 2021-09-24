import React from 'react';
import PropTypes from 'prop-types';

export const Image = (props) => {
  return <img {...props} />;
};

Image.prototype = {
  src: PropTypes.string,
  srcset: PropTypes.string,
  alt: PropTypes.string,
  className: PropTypes.string,
};
