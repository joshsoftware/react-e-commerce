import React from 'react';
import { Form } from 'reactstrap';
import { Link } from 'react-router-dom';
import ButtonWrapper from './ButtonWrapper';
import FormEmailField from './FormEmailField';
import FormPasswordField from './FormPasswordField';
import FormTextField from './FormTextField';
import PropTypes from 'prop-types';
import FormDropdownField from './FormDropdownField';
import alertReducer from '../reducers/alertReducer';
import { useDispatch } from 'react-redux';
import { alertMessage } from '../actions/alertActions';

const RegistrationForm = ({ validateData, dispatch, formState }) => {
  const {
    firstname,
    lastname,
    email,
    password,
    country,
    state,
    city,
    address,
    firstnameError,
    lastnameError,
    emailError,
    passwordError,
    addressError,
    isLoading
  } = formState;
  const alertDispatch = useDispatch(alertReducer);
  alertDispatch(alertMessage({ alert: true, alertText: 'Successfully Registered' }));
  return (
    <>
      <h3>Register</h3>
      <hr />
      <Form
        onSubmit={(e) => {
          e.preventDefault();
          validateData();
        }}>
        <FormEmailField
          email={email}
          emailError={emailError}
          dispatch={dispatch}
          isRequired={true}
        />
        <FormPasswordField
          password={password}
          passwordError={passwordError}
          dispatch={dispatch}
          isRequired={true}
        />
        <FormTextField
          firstname={firstname}
          lastname={lastname}
          address={address}
          firstnameError={firstnameError}
          lastnameError={lastnameError}
          addressError={addressError}
          dispatch={dispatch}
          isRequired={true}
        />
        <FormDropdownField country={country} state={state} city={city} dispatch={dispatch} />
        <br />
        <ButtonWrapper
          buttonText={'Register'}
          onSubmit={(e) => {
            e.preventDefault();
            console.log('registration');
            validateData();
          }}
          disabled={isLoading}
        />
      </Form>
      <br />
      <h6>
        Already registered?
        <span className="input-group-btn">
          <Link to="/login"> Click to login</Link>
        </span>
      </h6>
    </>
  );
};

export default RegistrationForm;

RegistrationForm.propTypes = {
  validateData: PropTypes.func.isRequired,
  dispatch: PropTypes.func.isRequired,
  formState: PropTypes.object.isRequired
};
