import React, { useContext, useEffect, useState } from 'react';
import { ItemsContext } from '@routes/ItemContext';
import _ from 'lodash';
import { getSomeElement } from '@utils';
import './Breadcrumb.scss';

export const Breadcrumb = () => {
  const { categories } = useContext(ItemsContext);

  const renderCategories = () => {
    const categoriesToRender = categories?.map((category, index, { length }) => (
      <li key={index}>
        <span>{category}</span>
        {length !== index + 1 && <span>{'>'}</span>}
      </li>
    ));

    return categoriesToRender;
  };

  return <ul className={'nav-breadcrumb'}>{renderCategories()}</ul>;
};
