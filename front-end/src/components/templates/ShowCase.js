import React, { useContext, useEffect } from 'react';
import _ from 'lodash';
import { useLocation } from 'react-router-dom';
import ProductsContext from '@contexts/ProductsContext';

import { ProductItem } from '@components/organisms';

import './ShowCase.scss';

export const ShowCase = () => {
  let { pathname, search } = useLocation();

  const { showCaseResult, setQueryShowCase, categories } = useContext(ProductsContext);

  const { items = [] } = showCaseResult;

  useEffect(() => {
    const searchString = new URLSearchParams(search).get('search');

    setQueryShowCase({ pathname, q: searchString });
  }, [search]);

  // Unmount component
  useEffect(() => () => setQueryShowCase(undefined), []);

  const withoutCategoryShow = () => {
    return _.isEmpty(categories) ? ' show-case--empty-top' : '';
  };

  return (
    <>
      {!_.isEmpty(items) && (
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
      )}
    </>
  );
};
