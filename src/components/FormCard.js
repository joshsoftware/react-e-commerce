import React from 'react';
import RegistrationForm from './RegistrationForm';
import LoginForm from './LoginForm';
import PropTypes from 'prop-types';
import FormCardComponent from './FormCardComponent';
import CardBodyWrapper from './CardBodyWrapper';
import UserProfileUpdateForm from './UserProfileUpdateForm';
import AddProductForm from './AddProductForm';
import UpdateProductForm from './UpdateProductForm';
import SetPasswordForm from './SetPasswordForm';

const FormCard = ({ type, validateData, dispatch, formState }) => {
  if (type === 'registration') {
    return (
      <FormCardComponent
        data={
          <CardBodyWrapper
            body_content={
              <RegistrationForm
                validateData={validateData}
                dispatch={dispatch}
                formState={formState}
                type={type}
              />
            }
          />
        }
      />
    );
  } else if (type === 'userprofileupdate') {
    return (
      <FormCardComponent
        data={
          <CardBodyWrapper
            body_content={
              <UserProfileUpdateForm
                validateData={validateData}
                dispatch={dispatch}
                formState={formState}
                type={type}
              />
            }
          />
        }
      />
    );
  } else if (type === 'login') {
    return (
      <FormCardComponent
        data={
          <CardBodyWrapper
            body_content={
              <LoginForm
                validateData={validateData}
                dispatch={dispatch}
                formState={formState}
                type={type}
              />
            }
          />
        }
      />
    );
  } else if (type === 'add-product') {
    return (
      <FormCardComponent
        data={
          <CardBodyWrapper
            body_content={
              <AddProductForm
                validateData={validateData}
                dispatch={dispatch}
                formState={formState}
              />
            }
          />
        }
      />
    );
  } else if (type === 'update-product') {
    return (
      <FormCardComponent
        data={
          <CardBodyWrapper
            body_content={
              <UpdateProductForm
                validateData={validateData}
                dispatch={dispatch}
                formState={formState}
              />
            }
          />
        }
      />
    );
  } else if (type === 'set-password') {
    return (
      <FormCardComponent
        data={
          <CardBodyWrapper
            body_content={
              <SetPasswordForm
                validateData={validateData}
                dispatch={dispatch}
                formState={formState}
              />
            }
          />
        }
      />
    );
  }
};

export default FormCard;

FormCard.propTypes = {
  type: PropTypes.string.isRequired
};
