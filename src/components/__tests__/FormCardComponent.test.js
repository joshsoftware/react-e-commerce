import { render, cleanup } from '@testing-library/react';
import React from 'react';
import FormCardComponent from '../FormCardComponent';

afterEach(cleanup);

describe('FormCardComponent', () => {
  it('Must return FormCardComponent', () => {
    const { asFragment } = render(<FormCardComponent data={<h3>hello world</h3>} />);
    expect(asFragment()).toMatchSnapshot();
  });
});
