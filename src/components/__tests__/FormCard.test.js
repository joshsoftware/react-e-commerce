import { render } from '@testing-library/react';
import React from 'react';
import FormCard from '../FormCard';

describe('FormCard Component', () => {
  const validateData = () => {};
  const dispatch = () => {};
  const formState = {
    email: 'abc',
    password: 'ada'
  };

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
