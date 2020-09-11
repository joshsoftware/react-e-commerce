import MenuComponent from '../MenuComponent';
import { render } from '@testing-library/react';
import React from 'react';

describe('Menu Component', () => {
  it('Must return Menu', () => {
    const { asFragment } = render(<MenuComponent />);

    expect(asFragment()).toMatchSnapshot();
  });
});
