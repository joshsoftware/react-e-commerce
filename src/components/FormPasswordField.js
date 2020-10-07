import React from 'react';
import FormField from './FormField';
import { setPassword } from '../actions/formActions';
import PropTypes from 'prop-types';

let password = {
  field: 'examplePassword',
  labelText: 'Password',
  type: 'password',
  name: 'password',
  placeholder: 'sample123! - must have minimum 8 characters'
};
const FormPasswordField = (props) => {
  password = {
    ...password,
    value: props.password,
    onChange: (evt) => {
      props.dispatch(setPassword(evt));
    },
    invalid: props.passwordError !== null ? true : false,
    message: props.passwordError
  };
  if (props.isRequired === true) {
    password = { ...password, labelText: 'Password*' };
  } else {
    password = { ...password, labelText: 'Password' };
  }
  return (
    <>
      <FormField formfield={password} autoComplete={props.autoComplete} />
      <p
        style={{
          'text-align': 'left',
          'padding-top': -10,
          'padding-bottom': 10,
          display: props.type === 'login' ? 'none' : 'block'
        }}>
        <h5>Password Requirements</h5>
        <ul style={{ 'padding-left': 15 }}>
          <li>Must be a minimum of 8 characters</li>
          <li>Must contain letters, numbers and symbols</li>
        </ul>
      </p>
    </>
  );
};

export default FormPasswordField;

FormPasswordField.propTypes = {
  password: PropTypes.string.isRequired,
  dispatch: PropTypes.func.isRequired,
  passwordError: PropTypes.string,
  autoComplete: PropTypes.string,
  isRequired: PropTypes.bool,
  type: PropTypes.string
};
