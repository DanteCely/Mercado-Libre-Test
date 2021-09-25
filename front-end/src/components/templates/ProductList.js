import React, { useContext, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { ItemsContext } from '@routes/ItemContext';

export const ProductList = () => {
  let { pathname, search } = useLocation();

  const { itemsResult, setQueryItems } = useContext(ItemsContext);

  useEffect(() => {
    const searchString = new URLSearchParams(search).get('search');

    setQueryItems({ pathname, q: searchString });
  }, [search]);

  return (
    <>
      <div>I'm search's Reult of {search}</div>
      <div>{JSON.stringify(itemsResult)}</div>
    </>
  );
};
