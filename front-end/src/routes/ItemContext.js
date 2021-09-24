import React, { createContext } from 'react';
import { useRequest } from '@services';

export const ItemsContext = createContext(undefined);

const ItemsProvider = ({ children }) => {
  const [itemsResult, setQueryParams] = useRequest();
  const [item, setParams] = useRequest();

  const getProps = () => {
    return {
      itemsResult,
      setQueryParams,
      item,
      setParams,
    };
  };

  return <ItemsContext.Provider value={getProps()}>{children}</ItemsContext.Provider>;
};

export default ItemsProvider;
