import React from 'react';
import { render } from '@testing-library/react';
import { Card } from 'reactstrap';
import CardImgWrapper from '../CardImgWrapper';
import CardTitleWrapper from '../CardTitleWrapper';
import CardTextWrapper from '../CardTextWrapper';
import CardBodyWrapper from '../CardBodyWrapper';

describe('Product Card', () => {
  it('Must Return Product Card', () => {
    let body_content = [];
    let i = 0;
    body_content.push(<CardTitleWrapper key={i++} title={'Project Title'} />);
    body_content.push(<CardTextWrapper key={i++} text={'$1000'} />);

    const { asFragment } = render(
      <Card>
        <CardImgWrapper
          src={
            'https://assets.ajio.com/medias/sys_master/root/hb7/h8b/15083561943070/-473Wx593H-460422382-black-MODEL.jpg'
          }
        />
        <CardBodyWrapper body_content={body_content} />
      </Card>
    );
    expect(asFragment()).toMatchSnapshot();
  });
});
