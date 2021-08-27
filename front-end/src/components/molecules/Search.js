import React, { createContext, useEffect, useState } from 'react';
import { Switch, Route, Redirect, useLocation, useHistory } from 'react-router-dom';
import { getQueryParams } from '../../utils';

// export const SearchContext = createContext();

// export const Provider = ({ childer }) => {
//   const [searchString, setSearchString] = useState('');

//   getProps = () => {
//     return { searchString, setSearchString };
//   };

//   return <SearchContext.Provider {...getProps()}> {childer}</SearchContext.Provider>;
// };

export const Search = () => {
  let history = useHistory();
  let { search } = useLocation();
  const [searchString, setSearchString] = useState(new URLSearchParams(search).get('search') || '');

  const onSearch = () => {
    const searchParam = getQueryParams({ search: searchString, pathname: 'items' });

    history.push(searchParam);
  };

  const onKeyPress = (event) => {
    if (event.key === 'Enter') {
      onSearch();
    }
  };

  return (
    <>
      <span>Logo</span>
      <input
        type='text'
        aria-label='Search'
        value={searchString}
        onChange={(event) => setSearchString(event.target.value)}
        onKeyPress={onKeyPress}
      />
      <button type='button' onClick={onSearch}>
        Search
      </button>
    </>
  );
};
