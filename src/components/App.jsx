import React, { useEffect, useState } from 'react';
import { getImages } from './Api/PixabayApi';
import SearchBar from './Searchbar/Searchbar';
import ImageGallery from './ImageGallery/ImageGallery';
import Modal from './Modal/Modal';
import Button from './Button/Button';
import Loader from './Loader/Loader';
import { Wrapper } from './Searchbar/Searchbar.styled';

import { ToastContainer, toast, Slide } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export function App() {
  const [images, setImages] = useState([]);
  const [page, setPage] = useState(1);
  const [status, setStatus] = useState('idle');
  const [showModal, setShowModal] = useState(false);
  const [largeImageUrl, setLargeImageUrl] = useState('');
  const [query, setQuery] = useState('');
  const [loadMore, setLoadMore] = useState(null);

  const getLargeImgUrl = largeImageURL => {
    setLargeImageUrl(largeImageURL);
    toggleModal();
  };

  const toggleModal = () => {
    setShowModal(prevShowModal => !prevShowModal);
  };

  const handleChange = value => {
    setQuery(value);
    setPage(1);
    setImages([]);
    setLoadMore(null);
  };

  const handleLoadMore = () => {
    setPage(prevPage => prevPage + 1);
  };

  useEffect(() => {
    if (!query) {
      return;
    }

    setStatus('loading');
    setLoadMore(null);

    getImages(query, page)
      .then(response => {
        const { hits, totalHits } = response;

        if (totalHits === 0) {
          toast.info('Sorry image not found...', {
            position: toast.POSITION.TOP_RIGHT,
          });
        }

        setImages(prevImages => [...prevImages, ...hits]);
        setStatus('idle');
        setLoadMore(12 - hits.length);
      })
      .catch(error => {
        console.log(error);
        setStatus('error');
      });
  }, [page, query]);

  return (
    <Wrapper>
      <ToastContainer transition={Slide} />
      <SearchBar onSubmit={handleChange} />
      {showModal && (
        <Modal largeImageURL={largeImageUrl} onClose={toggleModal} />
      )}
      <ImageGallery images={images} onClick={getLargeImgUrl} />
      {status === 'loading' && <Loader />}
      {loadMore === 0 && <Button onClick={handleLoadMore} />}
    </Wrapper>
  );
}
