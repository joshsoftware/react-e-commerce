import React from 'react';
import FormCard from './FormCard';
import ColumnWrapper from './ColumnWrapper';
import RowWrapper from './RowWrapper';
import ContainerWrapper from './ContainerWrapper';
import PropTypes from 'prop-types';
import ImagePreviewContainer from '../containers/ImagePreviewContainer';

const AddProductComponent = ({ validateData, dispatch, formState }) => {
  const { imageUrl } = formState;
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
                    type={'add-product'}
                    validateData={validateData}
                    dispatch={dispatch}
                    formState={formState}
                  />
                }
              />
              <ImagePreviewContainer
                imageUrl={imageUrl === null ? '' : imageUrl}
                altrImageUrl={
                  'https://lh3.googleusercontent.com/proxy/-AbfZYmBs73YKKTYVym-eHFdT_gCDvsW0JkWJdciwxbuKJ9-oY7GmmXHCnLfdpE_06yG3Lz4lYsaDCz-ROiw2OzZDAXyde52uCM3ddqpYMF9BeEZ9YANDHGCP7tIc4ywGuI4H49iKbZfI04VEw'
                }
                message={'Product Image'}
              />
            </>
          }
        />
      }
    />
  );
};

export default AddProductComponent;

AddProductComponent.propTypes = {
  validateData: PropTypes.func.isRequired,
  dispatch: PropTypes.func.isRequired,
  formState: PropTypes.object.isRequired,
  imageUrl: PropTypes.oneOfType([PropTypes.string, PropTypes.object])
};
