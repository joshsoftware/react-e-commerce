import React from 'react';
import LoginForm from './LoginForm';
import PropTypes from 'prop-types';
import FormCardComponent from './FormCardComponent';
import CardBodyWrapper from './CardBodyWrapper';

const FormCard = ({ type }) => {
  if (type === 'registration') {
    return <FormCardComponent data={<CardBodyWrapper body_content={'registration_data'} />} />;
  } else {
    return <FormCardComponent data={<CardBodyWrapper body_content={<LoginForm />} />} />;
  }
};

export default FormCard;

FormCard.propTypes = {
  type: PropTypes.string.isRequired
};
