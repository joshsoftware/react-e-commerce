import { render, cleanup } from '@testing-library/react';
import React from 'react';
import FormCard from '../FormCard';

afterEach(cleanup);

describe('FormCard Component', () => {
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

  it('Must render RegistrationForm Component', () => {
    const { asFragment } = render(
      <FormCard
        type="registration"
        validateData={validateData}
        dispatch={dispatch}
        formState={formState}
      />
    );
    expect(asFragment()).toMatchSnapshot();
  });
  it('Must render  LoginFormCard Component', () => {
    const { asFragment } = render(
      <FormCard
        type="login"
        validateData={validateData}
        dispatch={dispatch}
        formState={formState}
      />
    );
    expect(asFragment()).toMatchSnapshot();
  });
});
