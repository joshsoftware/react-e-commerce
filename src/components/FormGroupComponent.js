import React from 'react';
import { FormGroup } from 'reactstrap';
import FormLabel from './FormLabelComponent';
import PropTypes from 'prop-types';

const FormGroupComponent = ({ label, mainLabel, setLabel }) => {
  return (
    <FormGroup check>
      <FormLabel check labelText={label} mainLabel={mainLabel} setLabel={setLabel} />
    </FormGroup>
  );
};

export default FormGroupComponent;

FormGroupComponent.propTypes = {
  label: PropTypes.string.isRequired,
  mainLabel: PropTypes.string,
  setLabel: PropTypes.string
};
