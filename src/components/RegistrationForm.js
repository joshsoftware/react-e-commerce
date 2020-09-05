import React from 'react';
import { Form, Button } from 'reactstrap';
import FormField from './FormField';

const RegistrationForm = () => {
  const firstname = {
      field: 'exampleFirstName',
      labelText: 'First Name',
      type: 'firstname',
      name: 'firstname',
      id: 'exampleFirstName',
      placeholder: 'John'
    },
    lastname = {
      field: 'exampleLastName',
      labelText: 'Last Name',
      type: 'lastname',
      name: 'lastname',
      id: 'exampleLastName',
      placeholder: 'Doe'
    },
    email = {
      field: 'exampleEmail',
      labelText: 'Email',
      type: 'email',
      name: 'email',
      id: 'exampleEmail',
      placeholder: 'example@company.com'
    },
    password = {
      field: 'examplePassword',
      labelText: 'Password',
      type: 'password',
      name: 'password',
      id: 'examplePassword',
      placeholder: 'password'
    },
    country = {
      field: 'exampleCountry',
      labelText: 'Country',
      type: 'country',
      name: 'country',
      id: 'exampleCountry',
      placeholder: ''
    },
    state = {
      field: 'exampleState',
      labelText: 'State',
      type: 'state',
      name: 'state',
      id: 'exampleState',
      placeholder: ''
    },
    city = {
      field: 'exampleCity',
      labelText: 'City',
      type: 'city',
      name: 'city',
      id: 'exampleCity',
      placeholder: ''
    },
    address = {
      field: 'exampleAddress',
      labelText: 'Address',
      type: 'address',
      name: 'address',
      id: 'exampleAddress',
      placeholder: ''
    };

  return (
    <Form>
      <FormField obj={firstname} />
      <FormField obj={lastname} />
      <FormField obj={email} />
      <FormField obj={password} />
      <FormField obj={country} />
      <FormField obj={state} />
      <FormField obj={city} />
      <FormField obj={address} />
      <Button>Submit</Button>
    </Form>
  );
};

export default RegistrationForm;
