import DropdownItemComponent from '../DropdownItemComponent';
import { render } from '@testing-library/react';
import React from 'react';

describe('DropdownItem Component', () => {
  it('Must return Dropdown Item', () => {
    const option = 'Options';
    const { asFragment } = render(<DropdownItemComponent option={option} />);

    expect(asFragment()).toMatchSnapshot();
  });
});
