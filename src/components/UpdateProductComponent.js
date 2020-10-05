import React from 'react';
import FormCard from './FormCard';
import ColumnWrapper from './ColumnWrapper';
import RowWrapper from './RowWrapper';
import ContainerWrapper from './ContainerWrapper';
import PropTypes from 'prop-types';
import ImagePreviewContainer from '../containers/ImagePreviewContainer';

const UpdateProductComponent = ({ validateData, dispatch, formState }) => {
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
                    type={'update-product'}
                    validateData={validateData}
                    dispatch={dispatch}
                    formState={formState}
                  />
                }
              />
              <ImagePreviewContainer
                imageUrl={
                  imageUrl === null
                    ? `${process.env.REACT_APP_SERVER_URL}${profile.profile_image}`
                    : imageUrl
                }
                message={imageUrl === '' ? 'Product Image (current)' : 'Product Image (preview)'}
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
