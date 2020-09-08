import FormPasswordField from '../FormPasswordField';
import { render } from '@testing-library/react';
import React from 'react';

describe('FormPasswordField  Component', () => {
  it('Must return FormPasswordField  Component', () => {
    const { asFragment } = render(<FormPasswordField />);
    expect(asFragment()).toMatchSnapshot();
  });
});
