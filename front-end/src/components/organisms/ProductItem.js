import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';

import i18n from '@i18n';
import { getParams } from '@utils';
import './ProductItem.scss';

import { Image, Typography } from '@components/atoms';
import { Price } from '@components/molecules';

const { REACT_APP_END_POINT_PRODUCT_DETAILS } = process.env;

export const ProductItem = (props) => {
  const { item } = props;
  const {
    id,
    free_shipping,
    title,
    price: { amount },
    picture,
    city_name,
  } = item;

  let history = useHistory();

  const goProductDetails = () => {
    const productDetailParam = getParams([REACT_APP_END_POINT_PRODUCT_DETAILS, id]);

    history.push(productDetailParam);
  };

  const propsImage = {
    src: picture,
    alt: i18n('PRODUCT_ITEM__IMAGE_DESCRIPTOR'),
    className: 'product-item__thumbnail',
    title,
    onClick: goProductDetails,
  };

  const propsPrice = {
    className: 'product-item__price',
    freeShipping: free_shipping,
    amount,
    title,
    onClick: goProductDetails,
  };

  const propsDescription = {
    title,
    className: 'product-item__description',
    onClick: goProductDetails,
  };

  return (
    <div className={'product-item'}>
      <div className={'product-item__info'}>
        <Image {...propsImage} />
        <div className={'product-item__price-description'}>
          <Price {...propsPrice} />
          <Typography {...propsDescription}>{title}</Typography>
        </div>
      </div>
      <span className='product-item__city-name'>{city_name}</span>
    </div>
  );
};
