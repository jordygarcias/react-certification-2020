import { IconButton, InputBase, Paper } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import React, { useState } from 'react';
import styled from 'styled-components';

const SearchBar = styled(Paper)`
  && {
    background-color: ${({ theme }) => theme.searchBarColor};
    border-radius: 0px;
    display: flex;
    box-shadow: 0px 0px 0px;
    border-bottom: 1px solid ${({ theme }) => theme.searchBarBorderColor};
    height: 50px;
  }
`;

const SearchInput = styled(InputBase)`
  && {
    flex: 1;
    padding: 0px 10px;
    color: ${({ theme }) => theme.textColor};
  }
`;

const SearchButton = styled(IconButton)`
  && {
    background-color: ${({ theme }) => theme.searchBarButtonColor};
    border-radius: 0px;
    color: ${({ theme }) => theme.secondaryTextColor};
    border: 1px solid ${({ theme }) => theme.searchBarBorderColor};
    border-bottom: 0px;
  }
`;

const SearchBoxLayout = ({ children, onSearch, searchOnType }) => {
  const [searchText, setSearchText] = useState('');

  const handleSearchTextChange = (value, forceSearch = false) => {
    setSearchText(value);
    if (searchOnType || forceSearch) {
      onSearch(value);
    }
  };

  return (
    <>
      <SearchBar>
        <SearchInput
          onKeyPress={(e) => {
            if (e.key === 'Enter') {
              handleSearchTextChange(e.target.value, true);
            }
          }}
          data-testid="search-input"
          onChange={(e) => handleSearchTextChange(e.target.value)}
          placeholder={searchOnType ? 'Filter' : 'Search'}
        />
        {!searchOnType && (
          <SearchButton data-testid="search-btn" onClick={() => onSearch(searchText)}>
            <SearchIcon />
          </SearchButton>
        )}
      </SearchBar>
      {children}
    </>
  );
};

export default SearchBoxLayout;
