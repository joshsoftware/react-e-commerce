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
      console.log(evt);
      props.dispatch(setEmail(evt));
    },
    invalid: props.emailError !== null ? true : false,
    message: props.emailError
  };
  return <FormField formfield={email} />;
};

export default FormEmailField;

FormEmailField.propTypes = {
  email: PropTypes.string.isRequired,
  dispatch: PropTypes.func.isRequired,
  emailError: PropTypes.string
};
