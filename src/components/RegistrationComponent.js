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
                  'https://lh3.googleusercontent.com/proxy/-AbfZYmBs73YKKTYVym-eHFdT_gCDvsW0JkWJdciwxbuKJ9-oY7GmmXHCnLfdpE_06yG3Lz4lYsaDCz-ROiw2OzZDAXyde52uCM3ddqpYMF9BeEZ9YANDHGCP7tIc4ywGuI4H49iKbZfI04VEw'
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
