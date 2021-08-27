import React from 'react';
import { useParams } from 'react-router-dom';
import { Switch, Route, Redirect, useLocation, Link } from 'react-router-dom';

export const ProductDetail = (props) => {
  let { id } = useParams();
  let location = useLocation();

  return (
    <>
      <div>I'm a Product Detail named with {id}</div>
      <div>{JSON.stringify(location)}</div>
    </>
  );
};
