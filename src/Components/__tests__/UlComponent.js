import React from 'react';
import { render } from '@testing-library/react';
import UlComponent from '../UlComponent';

describe('UlComponent ', () => {
  it('Must return entire UnorderdListcontainer', () => {
    const { asFragment } = render(<UlComponent />);
    expect(asFragment()).toMatchSnapshot();
  });
});
