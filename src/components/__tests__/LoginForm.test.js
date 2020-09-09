import { render, cleanup } from '@testing-library/react';
import React from 'react';
import LoginForm from '../LoginForm';

afterEach(cleanup);

describe('LoginForm Component', () => {
  const validateData = () =>{

  }
  const dispatch = () => {

  }
  const formState = {
    email: 'abc',
    password: 'ada'
  }
  it('Must return LoginForm Component', () => {
    const { asFragment } = render(<LoginForm validateData={validateData} dispatch={dispatch} formState={formState}/>);
    expect(asFragment()).toMatchSnapshot();
  });
});
