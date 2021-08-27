import React from 'react';
import { Switch, Route, Redirect, useLocation, Link } from 'react-router-dom';
import { Home } from '../components/templates/Home';
import { Search } from '../components/molecules/Search';

import { renderRoutes } from '../utils';
import { Items } from './Items.routes';
import { ItemsContext, ItemsProvider } from './ItemContext';

const routes = [
  {
    path: '/',
    exact: true,
    component: () => <Home />,
  },
  {
    path: '/items',
    component: () => <Items />,
  },
];

export const Routes = () => {
  return (
    <main>
      <ItemsProvider>
        <Search />
        <Switch>{renderRoutes(routes)}</Switch>
      </ItemsProvider>
    </main>
  );
};
