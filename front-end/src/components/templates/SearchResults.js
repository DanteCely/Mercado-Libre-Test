import React, { useContext, useEffect } from 'react';
import { ItemsContext } from '../../routes/ItemContext';
import { Switch, Route, Redirect, useLocation, useRouteMatch } from 'react-router-dom';

export const SearchResults = () => {
  let { pathname, search } = useLocation();

  const { itemsResult, setQueryParams } = useContext(ItemsContext);

  useEffect(() => {
    const searchString = new URLSearchParams(search).get('search');

    setQueryParams({ q: searchString, pathname });
  }, [search]);

  return (
    <>
      <div>I'm search's Reult of {search}</div>
      <div>{JSON.stringify(itemsResult)}</div>
    </>
  );
};
