import React from 'react';
import FormField from './FormField';
import { setFirstname, setLastname, setAddress } from '../actions/formActions';
import PropTypes from 'prop-types';

let firstname = {
    field: 'exampleFirstName',
    labelText: 'First Name',
    type: 'firstname',
    name: 'firstname',
    placeholder: 'John'
  },
  lastname = {
    field: 'exampleLastName',
    labelText: 'Last Name',
    type: 'lastname',
    name: 'lastname',
    placeholder: 'Doe'
  },
  address = {
    field: 'exampleAddress',
    labelText: 'Address',
    type: 'address',
    name: 'address',
    placeholder: ''
  };

const FormTextField = (props) => {
  firstname = {
    ...firstname,
    value: props.firstname,
    onChange: (evt) => {
      props.dispatch(setFirstname(evt));
    },
    invalid: props.firstnameError !== null ? true : false,
    message: props.firstnameError
  };
  lastname = {
    ...lastname,
    value: props.lastname,
    onChange: (evt) => {
      props.dispatch(setLastname(evt));
    },
    invalid: props.lastnameError !== null ? true : false,
    message: props.lastnameError
  };
  address = {
    ...address,
    value: props.address,
    onChange: (evt) => {
      props.dispatch(setAddress(evt));
    },
    invalid: props.addressError !== null ? true : false,
    message: props.addressError
  };

  return (
    <>
      <FormField formfield={firstname} />
      <FormField formfield={lastname} />
      <FormField formfield={address} />
    </>
  );
};

export default FormTextField;

FormTextField.propTypes = {
  firstname: PropTypes.string.isRequired,
  lastname: PropTypes.string.isRequired,
  address: PropTypes.string.isRequired,
  firstnameError: PropTypes.string,
  lastnameError: PropTypes.string,
  addressError: PropTypes.string,
  dispatch: PropTypes.func.isRequired
};
