import DropdownMenuComponent from '../DropdownMenuComponent';
import { render } from '@testing-library/react';
import React from 'react';

describe('DropdownMenu Component', () => {
  it('Must return Dropdown Menu', () => {
    const { asFragment } = render(<DropdownMenuComponent />);

    expect(asFragment()).toMatchSnapshot();
  });
});
