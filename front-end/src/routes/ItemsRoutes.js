import React, { useContext } from 'react';
import { Switch, useRouteMatch } from 'react-router-dom';
import _ from 'lodash';
import { ProductDetail, ProductList } from '@components/templates';
import { Breadcrumb } from '@components/molecules';
import { renderRoutes } from '@utils';
import { ItemsContext } from './ItemContext';

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
  // const { categories } = useContext(ItemsContext); // TODO: por qué se estropéa?

  return (
    <main>
      <Breadcrumb />
      <Switch>{renderRoutes(routes)}</Switch>
    </main>
  );
};
