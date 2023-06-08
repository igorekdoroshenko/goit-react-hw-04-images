import React, { Component } from 'react';
import { getImages } from './Api/PixabayApi';
import SearchBar from './Searchbar/Searchbar';
import ImageGallery from './ImageGallery/ImageGallery';
import Modal from './Modal/Modal';
import Button from './Button/Button';
import Loader from './Loader/Loader';
import { Wrapper } from './Searchbar/Searchbar.styled';

import { ToastContainer, toast, Slide } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export class App extends Component {
  state = {
    images: [],
    page: 1,
    status: 'idle',
    error: null,
    showModal: false,
    largeImageUrl: '',
    query: '',
    loadMore: null,
  };

  
  componentDidUpdate(_, prevState) {
    const { page, query } = this.state;

    if (
      prevState.page !== this.state.page ||
      prevState.query !== this.state.query
    ) {
      this.setState({ status: 'loading' });

      getImages(query, page)
      .then(response => {
        const { hits, totalHits } = response;

        if (totalHits === 0) {
          toast.info('Sorry image not found...', {
            position: toast.POSITION.TOP_RIGHT,
          });
        }

        this.setState(prevState => ({
          images: [...prevState.images, ...hits],
          status: 'idle',
          loadMore: 12 - hits.length,
        }));
      })
      .catch(error => {
        console.log(error);
        this.setState({ status: 'error' });
      });
    }
  }

  getLargeImgUrl = largeImageURL => {
    this.setState({ largeImageUrl: largeImageURL });
    this.toggleModal();
  };

  toggleModal = () => {
    this.setState(state => ({
      showModal: !state.showModal,
    }));
  };

  handleChange = value => {
    this.setState({ query: value, page: 1, images: [], loadMore: null });
  };

  handleLoadMore = () => {
    this.setState(prevState => ({
      page: prevState.page + 1,
    }));
  };

  render() {
    const { images, status, showModal, largeImageUrl, loadMore } = this.state;
    return (
      <Wrapper>
        <ToastContainer transition={Slide} />
        <SearchBar onSubmit={this.handleChange} />
        {showModal && (
          <Modal largeImageURL={largeImageUrl} onClose={this.toggleModal} />
        )}
        <ImageGallery images={images} onClick={this.getLargeImgUrl} />
        {status === 'loading' && <Loader />}
        {loadMore === 0 && <Button onClick={this.handleLoadMore} />}
      </Wrapper>
    );
  }
}
