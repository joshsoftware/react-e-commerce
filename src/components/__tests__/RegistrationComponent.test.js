import { render, cleanup } from '@testing-library/react';
import React from 'react';
import RegistrationComponent from '../RegistrationComponent';

afterEach(cleanup);

describe('RegistrationComponent', () => {
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

  it('Must return RegistrationComponent', () => {
    const { asFragment } = render(
      <RegistrationComponent
        validateData={validateData}
        dispatch={dispatch}
        formState={formState}
      />
    );
    expect(asFragment()).toMatchSnapshot();
  });
});
