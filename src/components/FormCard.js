import React from 'react';
import LoginForm from './LoginForm';
import PropTypes from 'prop-types';
import FormCardComponent from './FormCardComponent';
import CardBodyWrapper from './CardBodyWrapper';

const FormCard = ({ type, validateData, dispatch, formState }) => {
  if (type === 'registration') {
    return <FormCardComponent data={<CardBodyWrapper body_content={'registration'} />} />;
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
