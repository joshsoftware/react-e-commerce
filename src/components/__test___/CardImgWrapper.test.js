import React from 'react';
import { render } from '@testing-library/react';
import CardImgWrapper from '../CardImgWrapper';

describe('Card Image', () => {
  it('Must Return Card Image', () => {
    const { asFragment } = render(
      <CardImgWrapper
        src={
          'https://assets.ajio.com/medias/sys_master/root/hb7/h8b/15083561943070/-473Wx593H-460422382-black-MODEL.jpg'
        }
      />
    );
    //console.log(card_image)
    expect(asFragment()).toMatchSnapshot();
  });
});
