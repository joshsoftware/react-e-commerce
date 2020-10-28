import React from 'react';
import { render } from '@testing-library/react';
import ContainerWrapper from '../ContainerWrapper';

describe('ContainerWrapper Component', () => {
  it('Must return container', () => {
    const { asFragment } = render(<ContainerWrapper />);

    expect(asFragment()).toMatchSnapshot();
  });
});
