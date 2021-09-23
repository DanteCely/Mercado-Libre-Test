import React, { createContext, useEffect, useState } from 'react';
import { Switch, Route, Redirect, useLocation, useHistory } from 'react-router-dom';
import { getQueryParams } from '@utils';
import { Image, Button, Input } from '@components/atoms';
import { Logo_ML, ic_Search } from '@assets/images';
import './Search.scss';

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

  const propsLogo = {
    src: Logo_ML,
    alt: 'Logo', // TODO: I18N
    className: 'nav-search__logo',
  };

  const propsButton = {
    onClick: onSearch,
    className: 'nav-search__search-button',
  };

  const propsIconSearch = {
    src: ic_Search,
    alt: 'Search', // TODO: I18N
    className: 'nav-search__search-button-icon',
  };

  const propsInput = {
    className: 'nav-search__input',
    'aria-label': 'Search', // TODO: I18N
    value: searchString,
    placeholder: 'Nunca dejes de buscar', // TODO: I18N
    onChange: (event) => setSearchString(event.target.value),
    onKeyPress,
  };

  const propsHeader = {
    className: 'nav-search',
  };

  const propsSearchBar = {
    className: 'nav-search__search-bar',
  };

  return (
    <header {...propsHeader}>
      <Image {...propsLogo} />
      <span {...propsSearchBar}>
        <Input {...propsInput} />
        <Button {...propsButton}>
          <Image {...propsIconSearch} />
        </Button>
      </span>
    </header>
  );
};
