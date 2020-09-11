import React from 'react';
import { FormGroup } from 'reactstrap';
import FormLabelComponent from './FormLabelComponent';
import PropTypes from 'prop-types';

const FormGroupComponent = ({ label, id }) => {
  return (
    <FormGroup check>
      <FormLabelComponent check labelText={label} for={id} />
    </FormGroup>
  );
};

export default FormGroupComponent;

FormGroupComponent.propTypes = {
  label: PropTypes.string.isRequired,
  id: PropTypes.number
};
