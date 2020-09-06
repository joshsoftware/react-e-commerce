import NavbarTogglerComponent from '../NavbarTogglerComponent';
import { render } from '@testing-library/react';
import React from 'react';

describe('NavbarToggler Component', () => {
  it('Must return Dropdown Item', () => {
    const toggle = () => {};
    const { asFragment } = render(<NavbarTogglerComponent toggle={toggle} />);

    expect(asFragment()).toMatchSnapshot();
  });
});
