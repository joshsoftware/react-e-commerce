import React from 'react';
import ColumnWrapper from '../ColumnWrapper';
import { render } from '@testing-library/react';

describe('ColumnWrapper Component', () => {
  it('Must return column', () => {
    const { asFragment } = render(<ColumnWrapper />);

    expect(asFragment()).toMatchSnapshot();
  });
});
