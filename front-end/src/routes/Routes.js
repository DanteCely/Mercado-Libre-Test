import React from 'react';
import { Switch } from 'react-router-dom';
import { Home } from '@components/templates';
import { SearchBar } from '@components/organisms';

import { renderRoutes } from '@utils';
import { SearchProvider } from '@contexts/SearchContext';
import { ProductsProvider } from '@contexts/ProductsContext';
import { ItemsRoutes } from './ItemsRoutes';

const routes = [
  {
    path: '/',
    exact: true,
    component: () => <Home />,
  },
  {
    path: '/items',
    component: () => <ItemsRoutes />,
  },
];

export const Routes = () => {
  return (
    <SearchProvider>
      <ProductsProvider>
        <SearchBar />
        <Switch>{renderRoutes(routes)}</Switch>
      </ProductsProvider>
    </SearchProvider>
  );
};
