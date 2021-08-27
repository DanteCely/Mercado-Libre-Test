import React from 'react';
import { Switch, Route, Redirect, useLocation, Link } from 'react-router-dom';

export const renderRoutes = (routes, props = {}) => {
  return routes.map((route, index) => {
    const { path, exact, component: Page } = route;

    return <Route key={index} path={path} exact={exact} children={<Page {...props} />} />;
  });
};
