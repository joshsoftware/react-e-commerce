import { render, cleanup } from '@testing-library/react';
import React from 'react';
import FormField from '../FormField';

afterEach(cleanup);

describe('FormFild Component', () => {
  const formfield = {
    field: '',
    labelText: '',
    type: '',
    name: '',
    placeholder: '',
    message: ''
  };
  it('Must return FormField Component', () => {
    const { asFragment } = render(<FormField formfield={formfield} />);
    expect(asFragment()).toMatchSnapshot();
  });
});
