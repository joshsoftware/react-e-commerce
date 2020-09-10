import FormEmailField from '../FormEmailField';
import { render } from '@testing-library/react';
import React from 'react';

describe('FormEmailField Component', () => {
  let email = '';
  const dispatch = () => {};
  it('Must return FormEmailField Component', () => {
    const { asFragment } = render(<FormEmailField email={email} dispatch={dispatch} />);
    expect(asFragment()).toMatchSnapshot();
  });
});
