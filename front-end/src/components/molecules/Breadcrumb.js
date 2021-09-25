import React, { useContext, useEffect, useState } from 'react';
import { ItemsContext } from '@routes/ItemContext';
import _ from 'lodash';
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

  return !_.isEmpty(categories) && <ul className={'nav-breadcrumb'}>{renderCategories()}</ul>;
};
