import React from 'react';
import { Form } from 'reactstrap';
import ButtonWrapper from './ButtonWrapper';
import FormEmailField from './FormEmailField';
import FormPasswordField from './FormPasswordField';
import FormTextField from './FormTextField';
import PropTypes from 'prop-types';

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
    countryError,
    stateError,
    cityError,
    addressError
  } = formState;

  return (
    <>
      <h3>Register</h3>
      <hr />
      <Form>
        <FormEmailField email={email} emailError={emailError} dispatch={dispatch} />
        <FormPasswordField password={password} passwordError={passwordError} dispatch={dispatch} />
        <FormTextField
          firstname={firstname}
          lastname={lastname}
          country={country}
          state={state}
          city={city}
          address={address}
          firstnameError={firstnameError}
          lastnameError={lastnameError}
          countryError={countryError}
          stateError={stateError}
          cityError={cityError}
          addressError={addressError}
          dispatch={dispatch}
        />
        <ButtonWrapper buttonText={'Submit'} onClick={validateData} />
      </Form>
      <h6>
        <br />
        Already registered? login
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
