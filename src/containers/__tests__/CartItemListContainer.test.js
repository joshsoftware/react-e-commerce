import React from 'react';
import CartItemListContainer from '../CartItemListContainer';
import { render } from '@testing-library/react';

describe('CartItemListContainer Component', () => {
  it('Must return column', () => {
    const { asFragment } = render(<CartItemListContainer />);

    expect(asFragment()).toMatchSnapshot();
  });
});
