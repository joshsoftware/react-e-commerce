import React from 'react';
import { render } from '@testing-library/react';
import CardTextWrapper from '../CardTextWrapper';

describe('Card Text', () => {
  it('Must Return Card Text', () => {
    const { asFragment } = render(<CardTextWrapper text={'Card Text'} />);
    expect(asFragment()).toMatchSnapshot();
  });
});
