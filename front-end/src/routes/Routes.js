import React from 'react';
import { Switch, Route, Redirect, useLocation, Link } from 'react-router-dom';
import { Home } from '@components/templates';
import { SearchBar } from '@components/organisms';

import { renderRoutes } from '@utils';
import { ItemsRoutes } from './ItemsRoutes';
import ItemsProvider from './ItemContext';

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
    <main>
      <ItemsProvider>
        <SearchBar />
        <Switch>{renderRoutes(routes)}</Switch>
      </ItemsProvider>
    </main>
  );
};
