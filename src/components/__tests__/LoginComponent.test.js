import { render, cleanup } from '@testing-library/react';
import React from 'react';
import LoginComponent from '../LoginComponent';

afterEach(cleanup);

describe('LoginComponent', () => {
  const validateData = () =>{

  }
  const dispatch = () => {

  }
  const formState = {
    email: 'abc',
    password: 'ada'
  }
  it('Must return LoginComponent', () => {
    const { asFragment } = render(<LoginComponent validateData={validateData} dispatch={dispatch} formState={formState}/>);
    expect(asFragment()).toMatchSnapshot();
  });
});
