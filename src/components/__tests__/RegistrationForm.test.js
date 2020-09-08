import { render, cleanup } from '@testing-library/react';
import React from 'react';
import RegistrationForm from '../RegistrationForm';

afterEach(cleanup);

describe('RegistrationForm Component', () => {
  it('Must return RegistrationForm Component', () => {
    const { asFragment } = render(<RegistrationForm />);
    expect(asFragment()).toMatchSnapshot();
  });
});
