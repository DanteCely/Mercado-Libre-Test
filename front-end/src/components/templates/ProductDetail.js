import React, { useContext, useEffect, useMemo } from 'react';
import { useParams, useLocation } from 'react-router-dom';
import _ from 'lodash';
import i18n from '@i18n';
import ProductsContext from '@contexts/ProductsContext';

import { Image, Typography } from '@components/atoms';
import { ShopInfo } from '@components/molecules';

import './ProductDetail.scss';

const { REACT_APP_END_POINT_PRODUCT_DETAILS } = process.env;

export const ProductDetail = (props) => {
  let { id } = useParams();
  let location = useLocation();

  const { item, setQueryProduct, categories } = useContext(ProductsContext);

  const { condition, description, picture, price, sold_quantity, title } = useMemo(() => {
    return { ...item };
  }, [item]);

  useEffect(() => {
    return () => {
      setQueryProduct(undefined);
    };
  }, []);

  useEffect(() => {
    setQueryProduct([REACT_APP_END_POINT_PRODUCT_DETAILS, id]);
  }, [id]);

  const withoutCategoryShow = () => {
    return _.isEmpty(categories) ? ' product-detail--empty-top' : '';
  };

  const propsImage = {
    src: picture,
    alt: i18n('PRODUCT_DETAIL__IMAGE_DESCRIPTOR'),
    title,
    className: 'product-detail__picture--fitted',
  };

  const propsShopInfo = {
    title,
    price,
    condition,
    soldQuantity: sold_quantity,
    onBuyClick: () => console.log('Comprar'),
  };

  const propsTitleDescription = {
    level: 3,
  };

  return (
    <>
      {!_.isEmpty(item) && (
        <section className={`product-detail${withoutCategoryShow()}`}>
          <div className={'product-detail__left-section'}>
            <div className={'product-detail__picture'}>
              <Image {...propsImage} />
            </div>
            <div className={'product-detail__description'}>
              <Typography {...propsTitleDescription}>{i18n('PRODUCT_DETAIL__TILTE_DECRIPTION')}</Typography>
              <Typography>{description}</Typography>
            </div>
          </div>
          <div className={'product-detail__right-section'}>
            <ShopInfo {...propsShopInfo} />
          </div>
        </section>
      )}
    </>
  );
};
