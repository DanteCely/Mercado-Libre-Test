import React from 'react';
import PropTypes from 'prop-types';

import { Button, Typography } from '@components/atoms';
import { Price } from '@components/molecules';

import i18n from '@i18n';

import './ShopInfo.scss';

export const ShopInfo = (props) => {
  const { price = {}, condition, soldQuantity, title, onBuyClick, ...propsShopInfo } = props;
  const { amount, decimals } = price;

  const propsPrice = {
    className: 'shop-info__price-amount',
    amount,
    decimals,
    title,
  };

  const propsButton = {
    onClick: onBuyClick,
    className: 'shop-info__button-buy',
  };

  const propsTitleDescription = {
    level: 3,
  };

  const showSoldQuantity = () => {
    return `${soldQuantity} ${i18n('SHOP_INFO__MESSAGE_SOLD')}`;
  };

  const showCondition = () => {
    return condition === 'new' ? i18n('SHOP_INFO__MESSAGE_NEW') : i18n('SHOP_INFO__MESSAGE_USED');
  };

  return (
    <div className={'shop-info'} {...propsShopInfo}>
      <div>
        <span>{showCondition()}</span> <span>{showSoldQuantity()}</span>
      </div>
      <Typography {...propsTitleDescription}>{title}</Typography>
      <Price {...propsPrice} />
      <Button {...propsButton}>{i18n('SHOP_INFO__BUTTON_BUY')}</Button>
    </div>
  );
};

ShopInfo.prototype = {
  title: PropTypes.string,
  price: PropTypes.shape({
    amount: PropTypes.number,
    decimals: PropTypes.string,
    currency: PropTypes.string,
  }),
  condition: PropTypes.string,
  soldQuantity: PropTypes.number,
  onBuyClick: PropTypes.func,
};
