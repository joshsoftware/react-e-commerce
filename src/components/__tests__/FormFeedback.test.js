import { render, cleanup } from '@testing-library/react';
import React from 'react';
import { FormFeedback } from 'reactstrap';

afterEach(cleanup);

describe('FormCard Component', () => {
  it('Must return FormCard Component', () => {
    const { asFragment } = render(<FormFeedback />);
    expect(asFragment()).toMatchSnapshot();
  });
});
