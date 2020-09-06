import { render, cleanup } from '@testing-library/react';
import React from 'react';
import LoginForm from '../LoginForm';

afterEach(cleanup);

describe('LoginForm Component', () => {
  it('Must return LoginForm Component', () => {
    const FormAttributes = {
      email: {
        field: '',
        labelText: '',
        type: '',
        name: '',
        placeholder: ''
      },
      password: {
        field: '',
        labelText: '',
        type: '',
        name: '',
        placeholder: ''
      }
    };
    const { email, password } = FormAttributes;
    const { asFragment } = render(<LoginForm email={email} password={password} />);
    expect(asFragment()).toMatchSnapshot();
  });
});
