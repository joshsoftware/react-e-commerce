import React from 'react';
import { Form } from 'reactstrap';
// import { Link } from 'react-router-dom';
import ButtonWrapper from './ButtonWrapper';
// import FormEmailField from './FormEmailField';
import FormPasswordField from './FormPasswordField';
import FormTextField from './FormTextField';
// import PropTypes from 'prop-types';
import FormDropdownField from './FormDropdownField';
import { setField } from '../actions/formActions';
import { initialState } from '../reducers/registrationReducer';

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
    // emailError,
    passwordError,
    addressError,
    isLoading
  } = formState;
  const resetData = () => {
    if (
      country === initialState.country ||
      state === initialState.state ||
      city === initialState.city
    ) {
      dispatch(setField('country', ''));
      dispatch(setField('state', ''));
      dispatch(setField('city', ''));
    }
  };
  return (
    <>
      <h3>Update User Profile</h3>
      <hr />
      <Form>
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
          onClick={() => {
            resetData();
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
