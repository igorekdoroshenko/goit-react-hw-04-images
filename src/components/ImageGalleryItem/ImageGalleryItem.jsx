
import PropTypes from 'prop-types';
import { GalleryItem, GalleryImage } from './ImageGalleryItem.styled';

// export class ImageGalleryItem extends Component {
//   state = {
//     showModal: false,
//   };

//   toggleModal = () => {
//     this.setState(({ showModal }) => ({ showModal: !showModal }));
//   };
//   render() {
//     const { showModal } = this.state;
//     const { image } = this.props;

//     return (
//       <>
//         <GalleryItem>
//           <GalleryImage src={image.webformatURL} alt={image.tags} onClick={this.toggleModal} />
//                 <Modal />
//                 {showModal && (
//                     <Modal largeImageURL={image.largeImageURL} tags={image.tags} onClose={this.toggleModal}></Modal>
//                 )}
//         </GalleryItem>
//       </>
//     );
//   }
// }

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

