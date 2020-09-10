import React from 'react';
import { render } from '@testing-library/react';
import RowWrapper from '../RowWrapper';

describe('RowWrapper Component', () => {
  it('Must return row', () => {
    const { asFragment } = render(<RowWrapper />);

    expect(asFragment()).toMatchSnapshot();
  });
});
