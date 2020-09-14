import React from 'react';
import { Form } from 'reactstrap';
import ButtonWrapper from './ButtonWrapper';
import FormPasswordField from './FormPasswordField';
import FormTextField from './FormTextField';
import PropTypes from 'prop-types';
import FormDropdownField from './FormDropdownField';

const UserProfileUpdateForm = ({ validateData, dispatch, formState }) => {
  const {
    firstname,
    lastname,
    country,
    state,
    city,
    address,
    password,
    firstnameError,
    lastnameError,
    passwordError,
    addressError,
    isLoading
  } = formState;

  return (
    <>
      <h3>Update User Profile</h3>
      <hr />
      <Form
        onSubmit={(e) => {
          e.preventDefault();
          validateData();
        }}>
        <FormPasswordField password={password} passwordError={passwordError} dispatch={dispatch} />
        <FormTextField
          firstname={firstname}
          lastname={lastname}
          address={address}
          firstnameError={firstnameError}
          lastnameError={lastnameError}
          addressError={addressError}
          dispatch={dispatch}
        />
        <FormDropdownField country={country} state={state} city={city} dispatch={dispatch} />
        <br />
        <ButtonWrapper
          buttonText={'Update'}
          onSubmit={(e) => {
            e.preventDefault();
            validateData();
          }}
          disabled={isLoading}
        />
      </Form>
      <br />
    </>
  );
};

export default UserProfileUpdateForm;

UserProfileUpdateForm.propTypes = {
  validateData: PropTypes.func.isRequired,
  dispatch: PropTypes.func.isRequired,
  formState: PropTypes.object.isRequired
};
