import FormGroupComponent from '../FormGroupComponent';
import { render } from '@testing-library/react';
import React from 'react';

describe('Menu Component', () => {
  it('Must return Menu', () => {
    const label = 'Label';
    const { asFragment } = render(<FormGroupComponent label={label} />);

    expect(asFragment()).toMatchSnapshot();
  });
});
