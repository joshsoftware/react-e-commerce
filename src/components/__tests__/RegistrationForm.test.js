import { render, cleanup } from '@testing-library/react';
import React from 'react';
import RegistrationForm from '../RegistrationForm';

afterEach(cleanup);

describe('RegistrationForm Component', () => {
  const validateData = () => {};

  const dispatch = () => {};

  const formState = {
    firstname: '',
    lastname: '',
    email: '',
    password: '',
    country: '',
    state: '',
    city: '',
    address: ''
  };

  it('Must return RegistrationForm Component', () => {
    const { asFragment } = render(
      <RegistrationForm validateData={validateData} dispatch={dispatch} formState={formState} />
    );
    expect(asFragment()).toMatchSnapshot();
  });
});
