import React from 'react';
import { render } from '@testing-library/react';
import CardTitleWrapper from '../CardTitleWrapper';

describe('Card Title', () => {
  it('Must Return Card Title', () => {
    const title = 'Title';
    const { asFragment } = render(<CardTitleWrapper title={title} />);
    expect(asFragment()).toMatchSnapshot();
  });
});
