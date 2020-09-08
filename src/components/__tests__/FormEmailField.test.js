import FormEmailField from '../FormEmailField';
import { render } from '@testing-library/react';
import React from 'react';

describe('FormEmailField Component', () => {
  it('Must return FormEmailField Component', () => {
    const { asFragment } = render(<FormEmailField />);
    expect(asFragment()).toMatchSnapshot();
  });
});
