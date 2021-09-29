import React from 'react';
import PropTypes from 'prop-types';

import { getMoneyFormat } from '@utils';
import { ic_shipping, ic_shipping2x } from '@assets/images';

import { Typography, Image } from '@components/atoms';

import i18n from '@i18n';

import './Price.scss';

export const Price = (props) => {
  const { freeShipping, amount, decimals, title, children, ...rest } = props;

  const propsShippingImg = {
    srcX1: ic_shipping,
    srcX2: ic_shipping2x,
    alt: i18n('PRICE__FREE_SHIPPING_DESCRIPTOR'),
    className: 'price__free-shipping',
  };

  return (
    <span className={'price'} {...rest}>
      <Typography title={title} level={3}>
        {getMoneyFormat(amount || children || 0)}
      </Typography>
      {decimals && <span className={'price__decimals'}>{decimals}</span>}
      {freeShipping && <Image {...propsShippingImg} />}
    </span>
  );
};

Price.prototype = {
  freeShipping: PropTypes.bool,
  amount: PropTypes.number,
  decimals: PropTypes.string,
  title: PropTypes.string,
  children: PropTypes.node,
};
