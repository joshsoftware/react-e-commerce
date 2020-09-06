import { render, cleanup } from '@testing-library/react';
import React from 'react';
import RegistrationForm from '../RegistrationForm';

afterEach(cleanup);

describe('RegistrationForm Component', () => {
  it('Must return RegistrationForm Component', () => {
    const FormAttributes = {
      firstname: {
        field: 'exampleFirstName',
        labelText: 'First Name',
        type: 'firstname',
        name: 'firstname',
        placeholder: 'John'
      },
      lastname: {
        field: 'exampleLastName',
        labelText: 'Last Name',
        type: 'lastname',
        name: 'lastname',
        placeholder: 'Doe'
      },
      email: {
        field: 'exampleEmail',
        labelText: 'Email',
        type: 'email',
        name: 'email',
        placeholder: 'example@company.com'
      },
      password: {
        field: 'examplePassword',
        labelText: 'Password',
        type: 'password',
        name: 'password',
        placeholder: 'password'
      },
      country: {
        field: 'exampleCountry',
        labelText: 'Country',
        type: 'country',
        name: 'country',
        placeholder: ''
      },
      state: {
        field: 'exampleState',
        labelText: 'State',
        type: 'state',
        name: 'state',
        placeholder: ''
      },
      city: {
        field: 'exampleCity',
        labelText: 'City',
        type: 'city',
        name: 'city',
        placeholder: ''
      },
      address: {
        field: 'exampleAddress',
        labelText: 'Address',
        type: 'address',
        name: 'address',
        placeholder: ''
      }
    };
    const { firstname, lastname, email, password, country, state, city, address } = FormAttributes;
    const { asFragment } = render(
      <RegistrationForm
        firstname={firstname}
        lastname={lastname}
        email={email}
        password={password}
        country={country}
        state={state}
        city={city}
        address={address}
      />
    );
    expect(asFragment()).toMatchSnapshot();
  });
});
