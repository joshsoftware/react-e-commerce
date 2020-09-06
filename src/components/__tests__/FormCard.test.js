import { render } from '@testing-library/react';
import React from 'react';
import FormCard from '../FormCard';

describe('FormCard Component', () => {
  it('Must render Login Form Component', () => {
    const { asFragment } = render(<FormCard type="login" />);
    expect(asFragment()).toMatchSnapshot();
  });
});
