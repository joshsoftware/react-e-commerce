import React from 'react';
import { Form } from 'reactstrap';
import FormField from './FormField';
import ButtonWrapper from './ButtonWrapper';
import PropTypes from 'prop-types';

const LoginForm = ({ email, password }) => {
  return (
    <Form>
      <FormField formfield={email} />
      <FormField formfield={password} />
      <ButtonWrapper buttonText={'Login'} />
      <hr />
      <ButtonWrapper buttonText={'Sign In With Google'} />
    </Form>
  );
};

export default LoginForm;

LoginForm.propTypes = {
  email: PropTypes.object.isRequired,
  password: PropTypes.object.isRequired
};
