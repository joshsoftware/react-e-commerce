import React from 'react';
import { FormFeedback } from 'reactstrap';
import PropTypes from 'prop-types';

const FormFeedbackWrapper = ({ message }) => {
  return <FormFeedback>{message}</FormFeedback>;
};

export default FormFeedbackWrapper;

FormFeedbackWrapper.propTypes = {
  message: PropTypes.string
};
