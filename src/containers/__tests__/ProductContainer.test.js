import React from 'react';
import { render } from '@testing-library/react';
import ProductContainer from '../ProductContainer';

describe('Product Container', () => {
  it('Must return entire product container', () => {
    const { asFragment } = render(<ProductContainer />);

    expect(asFragment()).toMatchSnapshot();
  });
});
