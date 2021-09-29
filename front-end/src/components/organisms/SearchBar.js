import React, { useContext } from 'react';
import { useHistory, Link } from 'react-router-dom';
import i18n from '@i18n';
import SearchContext from '@contexts/SearchContext';
import { getQueryParams } from '@utils';

import { Image, Button, Input } from '@components/atoms';
import { Logo_ML, Logo_ML2x, ic_Search, ic_Search2x } from '@assets/images';
import './SearchBar.scss';

const { REACT_APP_END_POINT_PRODUCT_DETAILS } = process.env;

export const SearchBar = () => {
  let history = useHistory();
  const { searchString, setSearchString } = useContext(SearchContext);

  const onSearch = () => {
    if (searchString) {
      const searchParam = getQueryParams({ pathname: REACT_APP_END_POINT_PRODUCT_DETAILS, search: searchString });

      history.push(searchParam);
    }
  };

  const onKeyPress = (event) => {
    if (event.key === 'Enter') {
      onSearch();
    }
  };

  const propsLogo = {
    srcX1: Logo_ML,
    srcX2: Logo_ML2x,
    alt: i18n('NAV_SEARCH__LOGO_ALT'),
  };

  const propsLogoLink = {
    to: '/',
    onClick: () => setSearchString(''),
    className: 'nav-search__logo-home',
  };

  const propsButton = {
    onClick: onSearch,
    className: 'nav-search__search-button',
  };

  const propsIconSearch = {
    srcSet: `${ic_Search} 1x, ${ic_Search2x} 2x`,
    src: ic_Search,
    alt: i18n('NAV_SEARCH__SEARCH_NAME'),
    className: 'nav-search__search-button-icon',
  };

  const propsInput = {
    className: 'nav-search__input',
    'aria-label': i18n('NAV_SEARCH__SEARCH_NAME'),
    value: searchString,
    placeholder: i18n('NAV_SEARCH__INPUT_PLACEHOLDER'),
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
      <Link {...propsLogoLink}>
        <Image {...propsLogo} />
      </Link>
      <span {...propsSearchBar}>
        <Input {...propsInput} />
        <Button {...propsButton}>
          <Image {...propsIconSearch} />
        </Button>
      </span>
    </header>
  );
};
