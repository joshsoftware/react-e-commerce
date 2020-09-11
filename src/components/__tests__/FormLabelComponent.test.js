import FormLabelComponent from '../FormLabelComponent';
import { render } from '@testing-library/react';
import React from 'react';

describe('Form Label Component', () => {
  it('Must return Label', () => {
    const field = '';
    const labelText = 'Text';

    const { asFragment } = render(<FormLabelComponent field={field} labelText={labelText} />);

    expect(asFragment()).toMatchSnapshot();
  });
});
