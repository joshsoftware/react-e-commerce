import { render, cleanup } from '@testing-library/react';
import React from 'react';
import FormCard from '../FormCard';

afterEach(cleanup);

describe('FormCard Component', () => {
  it('Must render RegistrationForm Component', () => {
    const { asFragment } = render(<FormCard type="registration" />);
    expect(asFragment()).toMatchSnapshot();
  });
});
