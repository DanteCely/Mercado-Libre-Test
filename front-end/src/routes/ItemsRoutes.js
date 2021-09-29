import React, { useContext } from 'react';
import { Switch, useRouteMatch } from 'react-router-dom';
import _ from 'lodash';
import { ProductDetail, ShowCase } from '@components/templates';
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
        return <ShowCase />;
      },
    },
  ];
};

export const ItemsRoutes = () => {
  let { path, url } = useRouteMatch();
  const routes = getRoutes(path);

  return (
    <main>
      <Breadcrumb />
      <Switch>{renderRoutes(routes)}</Switch>
    </main>
  );
};
