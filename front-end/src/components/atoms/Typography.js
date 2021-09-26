import React from 'react';
import PropTypes from 'prop-types';

const typographiesType = {
  1: ({ children, ...props }) => <h1 {...props}>{children}</h1>,
  2: ({ children, ...props }) => <h2 {...props}>{children}</h2>,
  3: ({ children, ...props }) => <h3 {...props}>{children}</h3>,
  4: ({ children, ...props }) => <h4 {...props}>{children}</h4>,
  paragraph: ({ children, ...props }) => <p {...props}>{children}</p>,
};

export const Typography = (props) => {
  const { level, ...propsTypography } = props;

  const TypographyType = typographiesType[level] || typographiesType['paragraph'];

  return <>{TypographyType(propsTypography)}</>;
};

Typography.prototype = {
  level: PropTypes.any,
  className: PropTypes.string,
  children: PropTypes.node,
};

Typography.defaultProps = {
  level: 'paragraph',
};
