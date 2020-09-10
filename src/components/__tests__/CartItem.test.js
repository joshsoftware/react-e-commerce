import React from 'react';
import CartItem from '../CartItem';
import { render } from '@testing-library/react';

describe('CartItem Component', () => {
  it('Must return cart item', () => {
    const { asFragment } = render(
      <CartItem item={{ product_price: 15, product_title: 'product' }} />
    );

    expect(asFragment()).toMatchSnapshot();
  });
});
