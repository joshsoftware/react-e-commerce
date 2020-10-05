import React, { useState } from 'react';
import FormCard from './FormCard';
import ColumnWrapper from './ColumnWrapper';
import RowWrapper from './RowWrapper';
import ContainerWrapper from './ContainerWrapper';
import PropTypes from 'prop-types';
import ImagePreviewContainer from '../containers/ImagePreviewContainer';

const UpdateProductComponent = ({ validateData, dispatch, formState }) => {
  const { imageUrl } = formState;
  const [currentImage, setCurrentImage] = useState(imageUrl);
  return (
    <ContainerWrapper
      styleClass={'pt-3 text-center h-100'}
      data={
        <RowWrapper
          data={
            <>
              <ColumnWrapper
                sm={{ size: 6, offset: 3 }}
                data={
                  <FormCard
                    type={'update-product'}
                    validateData={validateData}
                    dispatch={dispatch}
                    formState={formState}
                  />
                }
              />
              <ImagePreviewContainer
                imageUrl={
                  imageUrl === null || imageUrl === currentImage
                    ? `${process.env.REACT_APP_SERVER_URL}${currentImage}`
                    : imageUrl
                }
                message={
                  imageUrl === null || imageUrl === currentImage
                    ? 'Product Image (current)'
                    : 'Product Image (preview)'
                }
                altrImageUrl={
                  'https://lh3.googleusercontent.com/proxy/-AbfZYmBs73YKKTYVym-eHFdT_gCDvsW0JkWJdciwxbuKJ9-oY7GmmXHCnLfdpE_06yG3Lz4lYsaDCz-ROiw2OzZDAXyde52uCM3ddqpYMF9BeEZ9YANDHGCP7tIc4ywGuI4H49iKbZfI04VEw'
                }
              />
            </>
          }
        />
      }
    />
  );
};

export default UpdateProductComponent;

UpdateProductComponent.propTypes = {
  validateData: PropTypes.func.isRequired,
  dispatch: PropTypes.func.isRequired,
  formState: PropTypes.object.isRequired
};
