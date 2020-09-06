import NavigationBarComponent from '../NavigationBarComponent';
import { render } from '@testing-library/react';
import React from 'react';

describe('NavigationBar Component', () => {
  it('Must return Navigation bar', () => {
    const color = 'dark';
    const { asFragment } = render(<NavigationBarComponent color={color} />);

    expect(asFragment()).toMatchSnapshot();
  });
});
