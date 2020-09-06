import DropdownToggleComponent from '../DropdownToggleComponent';
import { render } from '@testing-library/react';
import React from 'react';

describe('DropdowToggle Component', () => {
  it('Must return Dropdown Toggle', () => {
    const src =
      'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png';
    const className = 'rounded';
    const alt = 'img';
    const { asFragment } = render(
      <DropdownToggleComponent src={src} className={className} alt={alt} />
    );

    expect(asFragment()).toMatchSnapshot();
  });
});
