import React, { createContext } from 'react';
import { Switch, Route, Redirect, useLocation, useRouteMatch } from 'react-router-dom';
import { ProductDetail } from '@components/templates';
import { SearchResults } from '@components/templates';
import { Breadcrumb } from '@components/molecules';
import { renderRoutes } from '../utils';

const getRoutes = (path) => {
  return [
    {
      path: `${path}/:id`,
      component: () => <ProductDetail />,
    },
    {
      path: `${path}`,
      component: () => {
        return <SearchResults />;
      },
    },
  ];
};

export const Items = () => {
  let { path, url } = useRouteMatch();
  const routes = getRoutes(path);

  return (
    <>
      <Breadcrumb />
      <Switch>{renderRoutes(routes)}</Switch>
    </>
  );
};
