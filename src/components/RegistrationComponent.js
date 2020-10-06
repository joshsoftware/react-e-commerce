import React, { useEffect, useState } from 'react';
import FormCard from './FormCard';
import ContainerWrapper from './ContainerWrapper';
import RowWrapper from './RowWrapper';
import ColumnWrapper from './ColumnWrapper';
import PropTypes from 'prop-types';
import ImagePreviewContainer from '../containers/ImagePreviewContainer';

const RegistrationComponent = ({ validateData, dispatch, formState }) => {
  const { imageUrl } = formState;
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
                    type={'registration'}
                    validateData={validateData}
                    dispatch={dispatch}
                    formState={formState}
                  />
                }
              />
              <ImagePreviewContainer
                imageUrl={!typeFlag ? '' : imageUrl}
                altrImageUrl={
                  'https://developer.apple.com/library/archive/referencelibrary/GettingStarted/DevelopiOSAppsSwift/Art/defaultphoto_2x.png'
                }
                message={'Profile Picture'}
              />
            </>
          }
        />
      }
    />
  );
};

export default RegistrationComponent;

RegistrationComponent.propTypes = {
  validateData: PropTypes.func.isRequired,
  dispatch: PropTypes.func.isRequired,
  formState: PropTypes.object.isRequired
};
