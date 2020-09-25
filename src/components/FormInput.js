import React from 'react';
import { Input } from 'reactstrap';
import PropTypes from 'prop-types';


const FormInput = ({ className, type, name, placeholder, value, onChange, invalid }) => {
  return (
    <Input
      className={className}
      type={type}
      name={name}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      invalid={invalid}
    />
  );
};

export default FormInput;

FormInput.propTypes = {
  type: PropTypes.string,
  name: PropTypes.string,
  placeholder: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func,
  invalid: PropTypes.bool,
  className: PropTypes.string
};
