import NavbarBrandComponent from '../NavbarBrandComponent';
import { render } from '@testing-library/react';
import React from 'react';

describe('NavbarBrand Component', () => {
  it('Must return Navigation bar brand', () => {
    const url = '/';
    const logo =
      'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png';
    const { asFragment } = render(<NavbarBrandComponent url={url} logo={logo} />);

    expect(asFragment()).toMatchSnapshot();
  });
});
