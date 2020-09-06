import React from 'react';
import { render } from '@testing-library/react';
import CardTitleWrapper from '../CardTitleWrapper';
import CardTextWrapper from '../CardTextWrapper';
import CardBodyWrapper from '../CardBodyWrapper';

describe('Card Body', () => {
  it('Must Return Card Body', () => {
    let body_content = [];
    body_content.push(<CardTitleWrapper key={'1'} title={'Project Title'} />);
    body_content.push(<CardTextWrapper key={'2'} text={'$1000'} />);

    const { asFragment } = render(<CardBodyWrapper body_content={body_content} />);
    expect(asFragment()).toMatchSnapshot();
  });
});
