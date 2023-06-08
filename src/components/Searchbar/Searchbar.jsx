import PropTypes from 'prop-types';
import { BsSearch } from 'react-icons/bs';
import React, { Component } from 'react';
import {
  SearchbarContainer,
  SearchForm,
  SearchFormButton,
  SearchFormButtonLabel,
  SearchFormInput,
} from './Searchbar.styled';

export default class SearchBar extends Component {
  state = {
    searchName: '',
  };

  handleChange = event => {
    this.setState({ searchName: event.currentTarget.value });
  };

  handleSubmit = event => {
    event.preventDefault();
    const { searchName } = this.state;

    this.props.onSubmit(searchName);
    this.setState({
      searchName: '',
    });
  };

  render() {
    const { searchName } = this.state;
    return (
      <SearchbarContainer>
        <SearchForm onSubmit={this.handleSubmit}>
          <SearchFormButton type="submit">
            <BsSearch />
            <SearchFormButtonLabel>Search</SearchFormButtonLabel>
          </SearchFormButton>

          <SearchFormInput
            type="text"
            // name="searchName"
            autocomplete="off"
            autoFocus
            placeholder="Search images and photos"
            value={searchName}
            onChange={this.handleChange}
          />
        </SearchForm>
      </SearchbarContainer>
    );
  }
}

SearchBar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
