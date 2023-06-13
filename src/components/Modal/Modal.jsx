import PropTypes from 'prop-types';
import React, { useEffect } from 'react';
import { Overlay, ModalWindow } from './Modal.styled';

export default function Modal ({onClose, largeImageURL}) {
  
  const hendleKeyDown = e => {
    if (e.code === 'Escape') {
      onClose();
    }
  };

  const handleBackDorpClick = e => {
    if (e.currentTarget === e.target) {
      onClose();
    }
  };

  useEffect(() => {
    window.addEventListener('keydown', hendleKeyDown);

    return () => {
    window.removeEventListener('keydown', hendleKeyDown);
    }
  })

    
      return (
          <Overlay onClick={handleBackDorpClick}>
              <ModalWindow>
                  <img src={largeImageURL} alt="" />
              </ModalWindow>
          </Overlay>
    );
  
}

Modal.propTypes = {
  onClose: PropTypes.func.isRequired,
  largeImageURL: PropTypes.string.isRequired,
  };