import MenuItemComponent from '../MenuItemComponent';
import { render } from '@testing-library/react';
import React from 'react';

describe('Menu Item Component', () => {
  it('Must return Menu Items', () => {
    const { asFragment } = render(<MenuItemComponent />);

    expect(asFragment()).toMatchSnapshot();
  });
});
