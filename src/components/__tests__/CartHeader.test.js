import React from 'react';
import CartHeader from '../CartHeader';
import { render } from '@testing-library/react';

describe('CartHeader Component', () => {
  it('Must return cart header', () => {
    const { asFragment } = render(<CartHeader />);

    expect(asFragment()).toMatchSnapshot();
  });
});
