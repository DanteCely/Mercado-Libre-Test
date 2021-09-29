import React, { useContext, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import { ItemsContext } from '@routes/ItemContext';

const { REACT_APP_END_POINT_PRODUCT_DETAILS } = process.env;

export const ProductDetail = (props) => {
  let { id } = useParams();
  let location = useLocation();

  const { item, setQueryItem, setQueryItems, categories } = useContext(ItemsContext);

  useEffect(() => {
    setQueryItem([REACT_APP_END_POINT_PRODUCT_DETAILS, id]);
  }, [id]);

  useEffect(() => () => setQueryItem(undefined), []);

  return (
    <>
      <div>I'm a Product Detail named with {id}</div>
      <div>{JSON.stringify(location)}</div>
      <div>{JSON.stringify(item)}</div>
    </>
  );
};
