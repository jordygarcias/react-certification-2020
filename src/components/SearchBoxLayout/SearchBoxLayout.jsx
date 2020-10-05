import SearchIcon from '@material-ui/icons/Search';
import React, { useState } from 'react';
import { SearchBar, SearchInput, SearchButton } from './SearchBar.style';

const SearchBoxLayout = ({ children, onSearch, searchOnType }) => {
  const [searchText, setSearchText] = useState('');

  const handleSearchTextChange = (evt, forceSearch = false) => {
    setSearchText(evt.target.value);
    if (searchOnType || forceSearch) {
      onSearch(evt.target.value);
    }
  };

  const handleKeyPress = (evt) => {
    if (evt.key === 'Enter') {
      handleSearchTextChange(evt, true);
    }
  };

  return (
    <>
      <SearchBar>
        <SearchInput
          onKeyPress={handleKeyPress}
          data-testid="search-input"
          onChange={handleSearchTextChange}
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
