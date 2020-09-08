import React from 'react';
import RegistrationForm from './RegistrationForm';
import PropTypes from 'prop-types';
import FormCardComponent from './FormCardComponent';
import CardBodyWrapper from './CardBodyWrapper';

const FormCard = ({ type }) => {
  if (type === 'registration') {
    return <FormCardComponent data={<CardBodyWrapper body_content={<RegistrationForm />} />} />;
  } else {
    return <FormCardComponent data={<CardBodyWrapper body_content={'login'} />} />;
  }
};

export default FormCard;

FormCard.propTypes = {
  type: PropTypes.string.isRequired
};
