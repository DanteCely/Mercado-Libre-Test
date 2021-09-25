import React, { createContext, useState, useEffect } from 'react';
import { useRequest } from '@services';

export const ItemsContext = createContext(undefined);

const ItemsProvider = ({ children }) => {
  const [itemsResult, setQueryItems] = useRequest({});
  const [item, setQueryItem] = useRequest({});

  const { categories: catFromItem } = item;
  const { categories: catFromItemsRes } = itemsResult;
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    setCategories(catFromItem);
  }, [catFromItem]);

  useEffect(() => {
    setCategories(catFromItemsRes);
  }, [catFromItemsRes]);

  const propsItemContext = {
    itemsResult,
    setQueryItems,
    item,
    setQueryItem,
    categories,
  };

  return <ItemsContext.Provider value={propsItemContext}>{children}</ItemsContext.Provider>;
};

export default ItemsProvider;
