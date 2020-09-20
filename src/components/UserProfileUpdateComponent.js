import React from 'react';
import FormCard from './FormCard';
import ContainerWrapper from './ContainerWrapper';
import RowWrapper from './RowWrapper';
import ColumnWrapper from './ColumnWrapper';
import PropTypes from 'prop-types';
import './CartItem.css';

const UserProfileUpdateComponent = ({ validateData, dispatch, formState }) => {
  return (
    <ContainerWrapper
      styleClass={'pt-3 text-center update_profile'}
      data={
        <RowWrapper
          data={
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
          }
        />
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
