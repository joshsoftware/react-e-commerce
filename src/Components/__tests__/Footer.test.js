import React from 'react';
import { render } from '@testing-library/react';
import Footer from '../Footer';

describe('Product Container', () => {
  it('Must return entire product container', () => {
    const { asFragment } = render(<Footer />);

    expect(asFragment()).toMatchSnapshot();
  });
});
