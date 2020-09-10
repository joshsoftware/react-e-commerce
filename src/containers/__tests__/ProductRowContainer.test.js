import React from 'react';
import { render } from '@testing-library/react';
import ProductRowContainer from '../ProductRowContainer';
import productList from '../../productList.json';

describe('ProductRow Container', () => {
  it('Must return prodcuts row', () => {
    const { asFragment } = render(<ProductRowContainer products={productList.slice(0, 3)} />);
    expect(asFragment()).toMatchSnapshot();
  });
});
