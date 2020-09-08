import { render, cleanup } from '@testing-library/react';
import React from 'react';
import LoginForm from '../LoginForm';

afterEach(cleanup);

describe('LoginForm Component', () => {
  it('Must return LoginForm Component', () => {
    const { asFragment } = render(<LoginForm />);
    expect(asFragment()).toMatchSnapshot();
  });
});
