import React from 'react';
import { FormGroup } from 'reactstrap';
import FormLabel from './FormLabelComponent';
import PropTypes from 'prop-types';

const FormGroupComponent = ({ label, mainLabel, setLabel, setProducts, products }) => {
  return (
    <FormGroup check>
      <FormLabel
        check
        labelText={label}
        mainLabel={mainLabel}
        setLabel={setLabel}
        setProducts={setProducts}
        products={products}
      />
    </FormGroup>
  );
};

export default FormGroupComponent;

FormGroupComponent.propTypes = {
  label: PropTypes.string.isRequired
};
