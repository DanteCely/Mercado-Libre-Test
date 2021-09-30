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
    className: 'primary-button',
  };

  const propsTitleDescription = {
    level: 3,
    className: 'shop-info__title-description',
  };

  const showSoldQuantity = () => {
    const messageSold = soldQuantity === 1 ? i18n('SHOP_INFO__MESSAGE_SOLD') : i18n('SHOP_INFO__MESSAGE_SOLD_PLURAL');

    return `${soldQuantity} ${messageSold}`;
  };

  const showCondition = () => {
    return condition === 'new' ? i18n('SHOP_INFO__MESSAGE_NEW') : i18n('SHOP_INFO__MESSAGE_USED');
  };

  return (
    <div className={'shop-info'} {...propsShopInfo}>
      <div className='shop-info__sub-info'>
        <span>{showCondition()}</span>
        <span>{' - '}</span>
        <span>{showSoldQuantity()}</span>
      </div>
      <Typography {...propsTitleDescription}>{title}</Typography>
      <Price {...propsPrice} />
      <div className={'shop-info__button-buy'}>
        <Button {...propsButton}>{i18n('SHOP_INFO__BUTTON_BUY')}</Button>
      </div>
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
