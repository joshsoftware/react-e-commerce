import ItemComponent from '../MenuComponent';
import { render } from '@testing-library/react';
import React from 'react';

describe('Item Component', () => {
  it('Must return Item', () => {
    const label = { label: 'Color' };
    const index = 0;
    const toggle = () => {};
    const menuOpenState = false;
    const stateChangeHandler = () => {};

    const { asFragment } = render(
      <ItemComponent
        label={label}
        index={index}
        toggle={toggle}
        menuOpenState={menuOpenState}
        stateChangeHandler={stateChangeHandler}
      />
    );

    expect(asFragment()).toMatchSnapshot();
  });
});
