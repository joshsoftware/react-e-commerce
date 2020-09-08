import React from 'react';
import { Form } from 'reactstrap';
import ButtonWrapper from './ButtonWrapper';
import FormEmailField from './FormEmailField';
import FormPasswordField from './FormPasswordField';
const LoginForm = () => {
  return (
    <>
      <h3>Login</h3>
      <hr />
      <Form>
        <FormEmailField />
        <FormPasswordField />
        <ButtonWrapper buttonText={'Login'} />
        <hr />
        <ButtonWrapper buttonText={'Sign In With Google'} />
      </Form>
    </>
  );
};

export default LoginForm;
