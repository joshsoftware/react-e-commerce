import React from 'react';
import { render } from '@testing-library/react';
import SearchBarContainer from '../SearchBarContainer';

describe('SearchBarContainer ', () => {
  it('Must return entire SearchBarContainer', () => {
    const { asFragment } = render(<SearchBarContainer />);

    expect(asFragment()).toMatchSnapshot();
  });
});
