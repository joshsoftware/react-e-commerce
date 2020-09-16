import React from 'react';
import FormField from './FormField';
import { setEmail } from '../actions/formActions';
import PropTypes from 'prop-types';

let email = {
  field: 'exampleEmail',
  labelText: 'Email',
  type: 'email',
  name: 'email',
  placeholder: 'example@company.com'
};
const FormEmailField = (props) => {
  email = {
    ...email,
    value: props.email,
    onChange: (evt) => {
      props.dispatch(setEmail(evt));
    },
    invalid: props.emailError !== null ? true : false,
    message: props.emailError
  };
  if (props.isRequired === true) {
    email = { ...email, labelText: 'Email*' };
  } else {
    email = { ...email, labelText: 'Email' };
  }
  return <FormField formfield={email} />;
};

export default FormEmailField;

FormEmailField.propTypes = {
  email: PropTypes.string.isRequired,
  dispatch: PropTypes.func.isRequired,
  emailError: PropTypes.string,
  isRequired: PropTypes.bool
};
