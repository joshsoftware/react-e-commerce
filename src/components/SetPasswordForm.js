import React, { useState, useEffect } from 'react';
import FormField from './FormField';
import { Form } from 'reactstrap';
import PropTypes from 'prop-types';
import ButtonWrapper from './ButtonWrapper';
import { setField } from '../actions/formActions';

let password = {
    field: 'examplePassword',
    labelText: 'Password*',
    type: 'password',
    name: 'password',
    placeholder: 'sample123! - must have minimum 8 characters'
  },
  confirmPassword = {
    field: 'exampleConfirmPassword',
    labelText: 'Confirm Password*',
    type: 'password',
    name: 'confirm_password',
    placeholder: 'confirm password'
  };

const SetPasswordForm = ({ validateData, dispatch, formState }) => {
  const [color, setColor] = useState('#ff4444');
  const matchPasswords = () => {
    if (formState.confirmPassword !== formState.password) {
      dispatch(setField('confirmPasswordError', "Password Doesn't Match"));
      setColor('#ff4444');
    } else {
      dispatch(setField('confirmPasswordError', 'Password Matched'));
      setColor('green');
    }
    if (formState.password === '' || formState.confirmPassword === '') {
      dispatch(setField('confirmPasswordError', null));
    }
  };
  useEffect(() => {
    matchPasswords();
  }, [formState.password, formState.confirmPassword]);

  password = {
    ...password,
    value: formState.password,
    onChange: (evt) => {
      dispatch(setField('password', evt.target.value));
    },
    invalid: formState.passwordError !== null ? true : false,
    message: formState.passwordError
  };
  confirmPassword = {
    ...confirmPassword,
    value: formState.confirmPassword,
    onChange: (evt) => {
      dispatch(setField('confirmPassword', evt.target.value));
    }
  };

  return (
    <>
      <h3>Set Password</h3>
      <h6>Create your password and log in to your account</h6>
      <hr />
      <Form
        onSubmit={(e) => {
          e.preventDefault();
          validateData();
          if (formState.confirmPasswordError !== 'Password Matched') {
            setColor('#ff4444');
          }
        }}>
        <FormField formfield={password} />
        <FormField formfield={confirmPassword} />
        <span style={{ color: `${color}`, fontSize: '75%', padding: 0, margin: 0 }}>
          {formState.confirmPasswordError}
        </span>
        <br />
        <p style={{ 'text-align': 'left' }}>
          <h5>Password Requirements</h5>
          <ul style={{ 'padding-left': 15 }}>
            <li>Must be a minimum of 8 characters</li>
            <li>Must contain letters, numbers and symbols</li>
            <li>Passwords must match</li>
          </ul>
        </p>
        <ButtonWrapper
          buttonText={'Set Password and log in'}
          onSubmit={(e) => {
            e.preventDefault();
            validateData();
            if (formState.confirmPasswordError !== 'Password Matched') {
              setColor('#ff4444');
            }
          }}
        />
      </Form>
    </>
  );
};

export default SetPasswordForm;

SetPasswordForm.propTypes = {
  validateData: PropTypes.func.isRequired,
  dispatch: PropTypes.func.isRequired,
  formState: PropTypes.object.isRequired
};
