import React from 'react';
import { render } from '@testing-library/react';
import ProductListContainer from '../ProductListContainer';

describe('ProductList Container', () => {
  it('Must return products list', () => {
    const { asFragment } = render(<ProductListContainer />);
    expect(asFragment()).toMatchSnapshot();
  });
});
