import UncontrolledDropdownComponent from '../UncontrolledDropdownComponent';
import { render } from '@testing-library/react';
import React from 'react';

describe('UncontrolledDropdown Component', () => {
  it('Must return UncontrolledDropdown Component', () => {
    const { asFragment } = render(<UncontrolledDropdownComponent />);

    expect(asFragment()).toMatchSnapshot();
  });
});
