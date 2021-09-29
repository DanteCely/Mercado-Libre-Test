import React, { useContext, useEffect } from 'react';
import _ from 'lodash';
import { useLocation } from 'react-router-dom';
import { ItemsContext } from '@routes/ItemContext';

import { ProductItem } from '@components/organisms';

import './ShowCase.scss';

export const ShowCase = () => {
  let { pathname, search } = useLocation();

  const { itemsResult, setQueryItems, categories } = useContext(ItemsContext);

  const { items = [] } = itemsResult;

  useEffect(() => {
    const searchString = new URLSearchParams(search).get('search');

    setQueryItems({ pathname, q: searchString });
  }, [search]);

  const withoutCategoryShow = () => {
    return _.isEmpty(categories) ? ' show-case--empty-top' : '';
  };

  return (
    <section className={`show-case${withoutCategoryShow()}`}>
      {items.map((item, index, { length }) => {
        return (
          <div key={index} className={'show-case__product-item-container'}>
            <ProductItem item={item} />
            {index < length - 1 && <hr />}
          </div>
        );
      })}
    </section>
  );
};
