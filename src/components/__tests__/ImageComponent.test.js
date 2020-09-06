import ImageComponent from '../ImageComponent';
import { render } from '@testing-library/react';
import React from 'react';

describe('Image Component', () => {
  it('Must return Image', () => {
    const style = { width: '50px' };
    const src = "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png";
    const className = "rounded";
    const alt = "img";
    const { asFragment } = render(<ImageComponent style={style} src={src} className={className} alt={alt}/>);

    expect(asFragment()).toMatchSnapshot();
  });
});