import React, { useState, useEffect, createContext } from 'react';
import { useLocation } from 'react-router-dom';

import { getSearchString } from '@utils';

const SearchContext = createContext(undefined);

export const SearchProvider = ({ children }) => {
  let { search } = useLocation();
  const [searchString, setSearchString] = useState(() => getSearchString(search));

  useEffect(() => {
    if (search) {
      const searchString = getSearchString(search);

      setSearchString(searchString);
    }
  }, [search]);

  const propsSearchContext = {
    searchString,
    setSearchString,
  };

  return <SearchContext.Provider value={propsSearchContext}>{children}</SearchContext.Provider>;
};

export default SearchContext;
