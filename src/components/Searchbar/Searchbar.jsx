import PropTypes from 'prop-types';
import { BsSearch } from 'react-icons/bs';
import React, { useState } from 'react';
import {
  SearchbarContainer,
  SearchForm,
  SearchFormButton,
  SearchFormButtonLabel,
  SearchFormInput,
} from './Searchbar.styled';

export default function SearchBar({ onSubmit }) {
  const [searchName, setSearchName] = useState('');

  const handleChange = event => {
    setSearchName(event.currentTarget.value);
  };

  const handleSubmit = event => {
    event.preventDefault();

    onSubmit(searchName);
    setSearchName('');
  };

  return (
    <SearchbarContainer>
      <SearchForm onSubmit={handleSubmit}>
        <SearchFormButton type="submit">
          <BsSearch />
          <SearchFormButtonLabel>Search</SearchFormButtonLabel>
        </SearchFormButton>

        <SearchFormInput
          type="text"
          autocomplete="off"
          autoFocus
          placeholder="Search images and photos"
          value={searchName}
          onChange={handleChange}
        />
      </SearchForm>
    </SearchbarContainer>
  );
}

SearchBar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
