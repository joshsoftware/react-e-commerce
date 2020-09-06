import NavLinkComponent from '../NavLinkComponent';
import { render } from '@testing-library/react';
import React from 'react';

describe('NavLink Component', () => {
  it('Must return Navigation Link component', () => {
    const url = "/";
    const lable = "Lable";
    const logo = "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png";
    const { asFragment } = render(<NavLinkComponent url={url} lable={lable} logo={logo}/>);

    expect(asFragment()).toMatchSnapshot();
  });
});