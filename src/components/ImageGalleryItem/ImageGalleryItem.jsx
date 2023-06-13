
import PropTypes from 'prop-types';
import { GalleryItem, GalleryImage } from './ImageGalleryItem.styled';

export const ImageGalleryItem = ({ images, onClick }) => {
  return images.map((image, index) => {
    return (
      <GalleryItem key={index}>
        <GalleryImage
          onClick={() => {
            onClick(image.largeImageURL);
          }}
          src={image.webformatURL}
          alt={image.tags}
        />
      </GalleryItem>
    );
  });
};

ImageGalleryItem.propTypes = {
  images: PropTypes.array.isRequired,
  onClick:PropTypes.func.isRequired,
  };

