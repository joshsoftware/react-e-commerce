import React from 'react';
import { FormGroup } from 'reactstrap';
import FormInput from './FormInput';
import FormLabel from './FormLabel';
import FormFeedbackWrapper from './FormFeedbackWrapper';
import PropTypes from 'prop-types';

const FormField = ({ formfield }) => {
  const {
    field,
    labelText,
    type,
    name,
    placeholder,
    message,
    value,
    onChange,
    invalid,
    autoComplete
  } = formfield;
  return (
    <FormGroup>
      <FormLabel field={field} labelText={labelText} />
      <FormInput
        type={type}
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        invalid={invalid}
        autoComplete={autoComplete}
      />
      <FormFeedbackWrapper message={message} />
    </FormGroup>
  );
};

export default FormField;

FormField.propTypes = {
  formfield: PropTypes.object.isRequired
};
