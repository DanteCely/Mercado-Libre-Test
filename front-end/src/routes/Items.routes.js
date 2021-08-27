import React, { createContext } from 'react';
import { Switch, Route, Redirect, useLocation, useRouteMatch } from 'react-router-dom';
import { ProductDetail } from '../components/templates/ProductDetail';
import { SearchResults } from '../components/templates/SearchResults';
import { Breadcrumb } from '../components/molecules/Breadcrumb';
import { renderRoutes } from '../utils';
import useRequest from '../services/useRequest';

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

  return (
    <>
      <Breadcrumb />
      <Switch>{renderRoutes(getRoutes(path))}</Switch>
    </>
  );
};
