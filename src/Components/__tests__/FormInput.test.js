import React from 'react';
import { render } from '@testing-library/react';
import FormInput from '../FormInput';

describe('FormInput ', () => {
  it('Must return entire FormInput', () => {
    const type = '';
    const name = '';
    const placeholder = '';
    const value = '';
    const onChange = () => {};
    const invalid = true;
    const { asFragment } = render(
      <FormInput
        type={type}
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        invalid={invalid}
      />
    );

    expect(asFragment()).toMatchSnapshot();
  });
});
