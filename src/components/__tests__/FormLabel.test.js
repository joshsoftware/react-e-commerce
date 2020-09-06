import FormLabel from '../FormLabel';
import { render } from '@testing-library/react';
import React from 'react';

describe('FormLabel Component', () => {
  it('Must return FormLabel Component', () => {
    const { asFragment } = render(<FormLabel />);
    expect(asFragment()).toMatchSnapshot();
  });
});
