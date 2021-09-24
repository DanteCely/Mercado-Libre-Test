import React, { createContext } from 'react';
import { Switch, Route, Redirect, useLocation, useRouteMatch } from 'react-router-dom';
import { ProductDetail, ProductList } from '@components/templates';
import { Breadcrumb } from '@components/molecules';
import { renderRoutes } from '@utils';

const getRoutes = (path) => {
  return [
    {
      path: `${path}/:id`,
      component: () => <ProductDetail />,
    },
    {
      path: `${path}`,
      component: () => {
        return <ProductList />;
      },
    },
  ];
};

export const ItemsRoutes = () => {
  let { path, url } = useRouteMatch();
  const routes = getRoutes(path);

  return (
    <>
      <Breadcrumb />
      <Switch>{renderRoutes(routes)}</Switch>
    </>
  );
};
