import React from 'react';
import { Form } from 'reactstrap';
import ButtonWrapper from './ButtonWrapper';
import FormEmailField from './FormEmailField';
import FormPasswordField from './FormPasswordField';
import PropTypes from 'prop-types';

const LoginForm = ({ validateData, dispatch, formState }) => {
  const { email, password, emailError, passwordError } = formState;

  return (
    <>
      <h3>Login</h3>
      <hr />
      <Form>
        <FormEmailField email={email} emailError={emailError} dispatch={dispatch} />
        <FormPasswordField password={password} passwordError={passwordError} dispatch={dispatch} />
        <ButtonWrapper buttonText={'Login'} onClick={validateData} />
        <hr />
        <ButtonWrapper buttonText={'Sign In With Google'} />
      </Form>
    </>
  );
};

export default LoginForm;

LoginForm.propTypes = {
  validateData: PropTypes.func.isRequired,
  dispatch: PropTypes.func.isRequired,
  formState: PropTypes.object.isRequired
};
