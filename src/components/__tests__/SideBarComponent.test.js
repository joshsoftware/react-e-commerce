import SideBarComponent from '../SideBarComponent';
import { render } from '@testing-library/react';
import React from 'react';

describe('SideBar Component', () => {
  it('Must return Sidebar', () => {
    const { asFragment } = render(<SideBarComponent />);

    expect(asFragment()).toMatchSnapshot();
  });
});
