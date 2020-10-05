import React from 'react';
import FormCard from './FormCard';
import ContainerWrapper from './ContainerWrapper';
import RowWrapper from './RowWrapper';
import ColumnWrapper from './ColumnWrapper';
import PropTypes from 'prop-types';
import './CartItem.css';
import AlertWrapper from './AlertWrapper';
import { useSelector } from 'react-redux';
import ImagePreviewContainer from '../containers/ImagePreviewContainer';

const UserProfileUpdateComponent = ({ validateData, dispatch, formState }) => {
  const { imageUrl } = formState;
  const { alert, alertText, color } = useSelector((state) => state.alertReducer);
  const { profile } = useSelector((state) => state.userprofileReducer);
  return (
    <ContainerWrapper
      styleClass={'pt-3 text-center update_profile'}
      data={
        <>
          <AlertWrapper
            className="text-center fixed-top"
            color={color}
            isOpen={alert}
            data={alertText}
          />
          <RowWrapper
            data={
              <>
                <ColumnWrapper
                  sm={{ size: 6, offset: 3 }}
                  data={
                    <FormCard
                      type={'userprofileupdate'}
                      validateData={validateData}
                      dispatch={dispatch}
                      formState={formState}
                    />
                  }
                />
                <ImagePreviewContainer
                  imageUrl={
                    imageUrl === profile.profile_image || imageUrl === ''
                      ? `${process.env.REACT_APP_SERVER_URL}${profile.profile_image}`
                      : imageUrl
                  }
                  message={
                    imageUrl === '' || imageUrl === profile.profile_image ? 'current' : 'preview'
                  }
                  altrImageUrl={
                    'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png'
                  }
                />
              </>
            }
          />
        </>
      }
    />
  );
};

export default UserProfileUpdateComponent;

UserProfileUpdateComponent.propTypes = {
  validateData: PropTypes.func.isRequired,
  dispatch: PropTypes.func.isRequired,
  formState: PropTypes.object.isRequired
};
