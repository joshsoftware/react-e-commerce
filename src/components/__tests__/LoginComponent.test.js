import { render, cleanup } from '@testing-library/react';
import React from 'react';
import LoginComponent from '../LoginComponent';

afterEach(cleanup);

describe('LoginComponent', () => {
  it('Must return LoginComponent', () => {
    const { asFragment } = render(<LoginComponent />);
    expect(asFragment()).toMatchSnapshot();
  });
});
