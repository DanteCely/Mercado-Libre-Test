import React, { createContext, useState, useEffect } from 'react';
import { useRequest } from '@services';

const ProductsContext = createContext(undefined);

export const ProductsProvider = ({ children }) => {
  const [showCaseResult, setQueryShowCase] = useRequest({});
  const [productResponse, setQueryProduct] = useRequest({});

  const { categories: catFromItem, item = { price: {} } } = productResponse;
  const { categories: catFromItemsRes } = showCaseResult;
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    setCategories(catFromItem);
  }, [catFromItem]);

  useEffect(() => {
    setCategories(catFromItemsRes);
  }, [catFromItemsRes]);

  const propsProductsContext = {
    showCaseResult,
    setQueryShowCase,
    item,
    productResponse,
    setQueryProduct,
    categories,
  };

  return <ProductsContext.Provider value={propsProductsContext}>{children}</ProductsContext.Provider>;
};

export default ProductsContext;
