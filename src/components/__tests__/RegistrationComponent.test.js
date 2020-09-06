import { render, cleanup } from '@testing-library/react';
import React from 'react';
import RegistrationComponent from '../RegistrationComponent';

afterEach(cleanup);

describe('RegistrationComponent', () => {
  it('Must return RegistrationComponent', () => {
    const { asFragment } = render(<RegistrationComponent />);
    expect(asFragment()).toMatchSnapshot();
  });
});
