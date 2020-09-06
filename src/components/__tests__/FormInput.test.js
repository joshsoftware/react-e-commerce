import { render } from '@testing-library/react';
import React from 'react';
import FormInput from '../FormInput';

describe('FormInput Component', () => {
  it('Must return FormInput Component', () => {
    const { asFragment } = render(<FormInput />);
    expect(asFragment()).toMatchSnapshot();
  });
});
