import React, { useContext, useEffect, useMemo } from 'react';
import { useParams, useLocation } from 'react-router-dom';
import _ from 'lodash';
import ProductsContext from '@contexts/ProductsContext';
import SearchContext from '@contexts/SearchContext';
import './ProductDetail.scss';

const { REACT_APP_END_POINT_PRODUCT_DETAILS } = process.env;

export const ProductDetail = (props) => {
  let { id } = useParams();
  let location = useLocation();

  const { item, setQueryProduct, setQueryShowCase, categories } = useContext(ProductsContext);
  const { setSearchString } = useContext(SearchContext);

  const {
    condition,
    description,
    free_shipping,
    picture,
    price: { amount, currency, decimals },
    sold_quantity,
    title,
  } = useMemo(() => {
    return { ...item };
  }, [item]);

  useEffect(() => {
    setSearchString('');

    return () => {
      setQueryProduct(undefined);
    };
  }, []);

  useEffect(() => {
    setQueryProduct([REACT_APP_END_POINT_PRODUCT_DETAILS, id]);
  }, [id]);

  return (
    <>
      {!_.isEmpty(item) && (
        <section className={'item-details'}>
          <div>I'm a Product Detail named with {id}</div>
          <div>{JSON.stringify(location)}</div>
          <div>{JSON.stringify(item)}</div>
        </section>
      )}
    </>
  );
};
