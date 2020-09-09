import React from 'react';
import { render } from '@testing-library/react';
import LiComponent from '../LiComponent';

describe('ListComponent ', () => {
  it('Must return entire Listcontainer', () => {
    const { asFragment } = render(<LiComponent />);

    expect(asFragment()).toMatchSnapshot();
  });
});
