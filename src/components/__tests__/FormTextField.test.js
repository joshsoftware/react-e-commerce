import { render, cleanup } from '@testing-library/react';
import React from 'react';
import FormTextField from '../FormTextField';

afterEach(cleanup);

describe('FormTextField Component', () => {
  it('Must return FormTextField Component', () => {
    const { asFragment } = render(<FormTextField />);
    expect(asFragment()).toMatchSnapshot();
  });
});
