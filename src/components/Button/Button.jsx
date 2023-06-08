import PropTypes from "prop-types";
import React from 'react';
import { LoadMoreContainer, LoadMoreButton } from './Button.styled';

const Button = ({ onClick }) => {
  return (
    <LoadMoreContainer>    <LoadMoreButton type="button" onClick={onClick}>
      Load more
    </LoadMoreButton></LoadMoreContainer>

  );
};

export default Button;

Button.propTypes = {
    onClick: PropTypes.func.isRequired,
};
