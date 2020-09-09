import FormPasswordField from '../FormPasswordField';
import { render } from '@testing-library/react';
import React from 'react';

describe('FormPasswordField  Component', () => {
  let password = '';
  const dispatch = () => {};

  it('Must return FormPasswordField  Component', () => {
    const { asFragment } = render(<FormPasswordField password={password} dispatch={dispatch} />);
    expect(asFragment()).toMatchSnapshot();
  });
});
