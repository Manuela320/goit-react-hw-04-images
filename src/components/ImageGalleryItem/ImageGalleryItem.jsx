import React from 'react';
import PropTypes from 'prop-types';
import styles from './ImageGalleryItem.module.css';

const ImageGalleryItem = ({ image, onClick }) => {
  const { webformatURL, largeImageURL } = image;

  return (
    <li className={styles.galleryItem} onClick={() => onClick(largeImageURL)}>
      <img src={webformatURL} alt="" className={styles.image} />
    </li>
  );
};

ImageGalleryItem.propTypes = {
  image: PropTypes.shape({
    webformatURL: PropTypes.string.isRequired,
    largeImageURL: PropTypes.string.isRequired,
  }).isRequired,
  onClick: PropTypes.func.isRequired,
};

export default ImageGalleryItem;
