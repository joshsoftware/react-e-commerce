import React from 'react';
import FormField from './FormField';
import {
  setFirstname,
  setLastname,
  setCountry,
  setState,
  setCity,
  setAddress
} from '../actions/formActions';
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
  country = {
    field: 'exampleCountry',
    labelText: 'Country',
    type: 'country',
    name: 'country',
    placeholder: ''
  },
  state = {
    field: 'exampleState',
    labelText: 'State',
    type: 'state',
    name: 'state',
    placeholder: ''
  },
  city = {
    field: 'exampleCity',
    labelText: 'City',
    type: 'city',
    name: 'city',
    placeholder: ''
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
  country = {
    ...country,
    value: props.country,
    onChange: (evt) => {
      props.dispatch(setCountry(evt));
    },
    invalid: props.countryError !== null ? true : false,
    message: props.countryError
  };
  state = {
    ...state,
    value: props.state,
    onChange: (evt) => {
      props.dispatch(setState(evt));
    },
    invalid: props.stateError !== null ? true : false,
    message: props.stateError
  };
  city = {
    ...city,
    value: props.city,
    onChange: (evt) => {
      props.dispatch(setCity(evt));
    },
    invalid: props.cityError !== null ? true : false,
    message: props.cityError
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
      <FormField formfield={country} />
      <FormField formfield={state} />
      <FormField formfield={city} />
      <FormField formfield={address} />
    </>
  );
};

export default FormTextField;

FormTextField.propTypes = {
  firstname: PropTypes.string.isRequired,
  lastname: PropTypes.string.isRequired,
  country: PropTypes.string.isRequired,
  state: PropTypes.string.isRequired,
  city: PropTypes.string.isRequired,
  address: PropTypes.string.isRequired,
  firstnameError: PropTypes.string,
  lastnameError: PropTypes.string,
  countryError: PropTypes.string,
  stateError: PropTypes.string,
  cityError: PropTypes.string,
  addressError: PropTypes.string,
  dispatch: PropTypes.func.isRequired
};
