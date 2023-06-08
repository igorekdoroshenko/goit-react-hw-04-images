import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { Overlay, ModalWindow } from './Modal.styled';
// import { createPortal } from 'react-dom';

// const modalroot = document.querySelector('#modal-root')

export default class Modal extends Component {
  componentDidMount() {
    window.addEventListener('keydown', this.hendleKeyDown);
  }
  componentWillUnmount() {
    window.removeEventListener('keydown', this.hendleKeyDown);
  }
  hendleKeyDown = e => {
    if (e.code === 'Escape') {
      this.props.onClose();
    }
  };

  handleBackDorpClick = e => {
    if (e.currentTarget === e.target) {
      this.props.onClose();
    }
  };
  render() {
    const { largeImageURL, tags } = this.props;
      return (
          <Overlay onClick={this.handleBackDorpClick}>
              <ModalWindow>
                  <img src={largeImageURL} alt={tags} />
              </ModalWindow>
          </Overlay>
    );
  }
}

Modal.proptTypes = {
    onClose: PropTypes.func.isRequired,
};