import NavComponent from '../NavComponent';
import { render } from '@testing-library/react';
import React from 'react';

describe('Nav Component', () => {
  it('Must return Nav Component', () => {
    const { asFragment } = render(<NavComponent />);

    expect(asFragment()).toMatchSnapshot();
  });
});
