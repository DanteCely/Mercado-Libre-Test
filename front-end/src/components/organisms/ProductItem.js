import React, { useEffect } from 'react';
import { Image, Typography } from '@components/atoms';
import { Price } from '@components/molecules';

import i18n from '@i18n';

import './ProductItem.scss';

export const ProductItem = (props) => {
  const { item } = props;
  const {
    free_shipping,
    title,
    price: { amount },
    picture,
    city_name,
  } = item;

  const propsImage = {
    src: picture,
    alt: i18n('PRODUCT_ITEM__IMAGE_DESCRIPTOR'),
    className: 'product-item__thumbnail',
    title,
  };

  const propsPrice = {
    freeShipping: free_shipping,
    amount,
    title,
  };

  return (
    <div className={'product-item'}>
      <div className={'product-item__info'}>
        <Image {...propsImage} />
        <div className={'product-item__price-description'}>
          <Price {...propsPrice} />
          <Typography title={title} className={'product-item__description'}>
            {title}
          </Typography>
        </div>
      </div>
      <span className='product-item__city-name'>{city_name}</span>
    </div>
  );
};
