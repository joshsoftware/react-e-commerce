import React from 'react';
import { Label } from 'reactstrap';
import PropTypes from 'prop-types';
import FormInput from './FormInput';

const FormLabelComponent = ({ field, id, labelText }) => {
  return (
    <Label for={field}>
      <FormInput type="checkbox" labelText={labelText} id={id} /> {labelText}
    </Label>
  );
};

export default FormLabelComponent;

FormLabelComponent.propTypes = {
  field: PropTypes.string,
  labelText: PropTypes.string,
  id: PropTypes.number
};
