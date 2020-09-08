import React from 'react';
import FormField from './FormField';

const firstname = {
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

const FormTextField = () => {
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
