import React from 'react';
import CartContainer from '../CartContainer';
import { render } from '@testing-library/react';

describe('CartContainer Component', () => {
  it('Must return cart container', () => {
    const { asFragment } = render(<CartContainer />);

    expect(asFragment()).toMatchSnapshot();
  });
});
