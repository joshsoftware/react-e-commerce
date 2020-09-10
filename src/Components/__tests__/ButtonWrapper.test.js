import React from 'react';
import { render } from '@testing-library/react';
import ButtonWrapper from '../ButtonWrapper';

describe('ButtonWrapper ', () => {
  it('Must return entire ButtonWrapper', () => {
    const style = '';
    const onClick = () => {};
    const buttonText = '';

    const { asFragment } = render(
      <ButtonWrapper style={style} onClick={onClick} buttonText={buttonText} />
    );

    expect(asFragment()).toMatchSnapshot();
  });
});
