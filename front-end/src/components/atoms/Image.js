import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

export const Image = (props) => {
  const { srcX1, srcX2, ...propsImg } = props;

  if (srcX1 && srcX2) {
    propsImg.srcSet = `${srcX1} 1x, ${srcX2} 2x`;
    propsImg.src = srcX1;
  }

  return <img {...propsImg} />;
};

Image.prototype = {
  src: PropTypes.string,
  srcSet: PropTypes.string,
  srcX1: PropTypes.any,
  srcX2: PropTypes.any,
  alt: PropTypes.string,
  className: PropTypes.string,
};
