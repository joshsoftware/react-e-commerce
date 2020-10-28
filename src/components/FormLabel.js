import React from 'react';
import { Label } from 'reactstrap';
import PropTypes from 'prop-types';

const FormLabel = ({ field, labelText }) => {
  return <Label for={field}>{labelText}</Label>;
};

export default FormLabel;

FormLabel.propTypes = {
  field: PropTypes.string,
  labelText: PropTypes.string
};
