import React from 'react';
import { Form, Button } from 'reactstrap';
import FormField from './FormField';

const LoginForm = () => {
  const email = {
      field: 'exampleEmail',
      labelText: 'Email',
      type: 'email',
      name: 'email',
      id: 'exampleEmail',
      placeholder: 'example@company.com'
    },
    password = {
      field: 'examplePassword',
      labelText: 'Password',
      type: 'password',
      name: 'password',
      id: 'examplePassword',
      placeholder: 'password'
    };
  return (
    <Form>
      <FormField obj={email} />
      <FormField obj={password} />
      <Button>Login</Button>
      <hr/>
      <Button >Sign In With Google</Button>
    </Form>
  );
};

export default LoginForm;
