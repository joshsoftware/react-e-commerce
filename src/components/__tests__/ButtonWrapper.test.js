import ButtonWrapper from '../ButtonWrapper';
import { render } from '@testing-library/react';
import React from 'react';

describe('ButtonWrapper Component', () => {
  it('Must return ButtonWrapper Component', () => {
    const { asFragment } = render(<ButtonWrapper />);
    expect(asFragment()).toMatchSnapshot();
  });
});
