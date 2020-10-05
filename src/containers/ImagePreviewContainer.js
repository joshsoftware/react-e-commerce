import React, { useEffect, useState } from 'react';
import ColumnWrapper from '../components/ColumnWrapper';
import ImageComponent from '../components/ImageComponent';
import PropTypes from 'prop-types';

const ImagePreviewContainer = ({ imageUrl, message }) => {
  const [imgUrl, setImgUrl] = useState('');
  let reader = new FileReader();
  reader.onload = () => {
    if (reader.readyState === 2) {
      setImgUrl(reader.result);
      console.log(typeof reader.result);
    }
  };
  useEffect(() => {
    if (imageUrl !== '' || imageUrl !== null) {
      if (typeof imageUrl === 'string') {
        setImgUrl(imageUrl);
      } else {
        reader.readAsDataURL(imageUrl);
      }
    }
  }, [imageUrl]);
  return (
    <ColumnWrapper
      className={'m-auto'}
      data={
        <>
          <ImageComponent
            src={
              imageUrl === ''
                ? 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png'
                : imgUrl
            }
            className={'image_size img-thumbnail'}
            alt="profile image"
          />
          <p className={`mb-0 ${imageUrl === '' ? 'text-danger' : 'text-success'}`}>
            {' '}
            {`Profile Picture (${message})`}
          </p>
        </>
      }
    />
  );
};

export default ImagePreviewContainer;

ImagePreviewContainer.propTypes = {
  imageUrl: PropTypes.oneOfType([PropTypes.string, PropTypes.object]).isRequired,
  message: PropTypes.string
};
