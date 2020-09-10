import React from 'react';
import RegistrationForm from './RegistrationForm';
import LoginForm from './LoginForm';
import PropTypes from 'prop-types';
import FormCardComponent from './FormCardComponent';
import CardBodyWrapper from './CardBodyWrapper';

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
              />
            }
          />
        }
      />
    );
  } else {
    return (
      <FormCardComponent
        data={
          <CardBodyWrapper
            body_content={
              <LoginForm validateData={validateData} dispatch={dispatch} formState={formState} />
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
