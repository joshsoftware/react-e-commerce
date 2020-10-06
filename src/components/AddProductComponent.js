import React, { useEffect, useState } from 'react';
import FormCard from './FormCard';
import ColumnWrapper from './ColumnWrapper';
import RowWrapper from './RowWrapper';
import ContainerWrapper from './ContainerWrapper';
import PropTypes from 'prop-types';
import ImagePreviewContainer from '../containers/ImagePreviewContainer';

const AddProductComponent = ({ validateData, dispatch, formState }) => {
  const { imageUrl, imageUrlError } = formState;
  const [typeFlag, setTypeFlag] = useState(false);
  let array = ['image/jpg', 'image/jpeg', 'image/gif', 'image/png', 'image/webp'];
  useEffect(() => {
    if (imageUrl !== null) {
      setTypeFlag(array.includes(imageUrl.type));
    }
  }, [imageUrl]);
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
                imageUrl={imageUrl === null || !typeFlag ? '' : imageUrl}
                altrImageUrl={
                  'https://developer.apple.com/library/archive/referencelibrary/GettingStarted/DevelopiOSAppsSwift/Art/defaultphoto_2x.png'
                }
                message={imageUrlError !== null ? `${imageUrlError}` : 'Product Image'}
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
