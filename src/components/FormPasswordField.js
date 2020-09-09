import React from 'react';
import FormField from './FormField';
import { setPassword } from '../actions/formActions';
import PropTypes from 'prop-types';

let password = {
  field: 'examplePassword',
  labelText: 'Password',
  type: 'password',
  name: 'password',
  placeholder: 'password'
};
const FormPasswordField = (props) => {
  password = {
    ...password,
    value: props.password,
    onChange: (evt) => {
      console.log(evt.target.value);
      props.dispatch(setPassword(evt));
    },
    invalid: props.passwordError !== null ? true : false,
    message: props.passwordError
  };
  return <FormField formfield={password} />;
};

export default FormPasswordField;

FormPasswordField.propTypes = {
  password: PropTypes.string.isRequired,
  dispatch: PropTypes.func.isRequired,
  passwordError: PropTypes.string
};
