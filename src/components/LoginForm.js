import React, { useState } from 'react';
import { Form } from 'reactstrap';
import ButtonWrapper from './ButtonWrapper';
import FormEmailField from './FormEmailField';
import FormPasswordField from './FormPasswordField';
import PropTypes from 'prop-types';
import { GoogleLogin } from 'react-google-login';

const LoginForm = ({ validateData, dispatch, formState }) => {
  const { email, password, emailError, passwordError, isLoading } = formState;

  const [token, setToken] = useState('');

  const responseGoogle = (response) => {
    console.log(response);
    setToken(response.tokenObj.access_token);
    console.log(token);
  };

  return (
    <>
      <h3>Login</h3>
      <hr />
      <Form>
        <FormEmailField email={email} emailError={emailError} dispatch={dispatch} />
        <FormPasswordField password={password} passwordError={passwordError} dispatch={dispatch} />
        <ButtonWrapper buttonText={'Login'} onClick={validateData} disabled={isLoading}/>
        <hr />
        <GoogleLogin
          clientId={process.env.REACT_APP_CLIENT_ID}
          buttonText="Sign in with Google "
          onSuccess={responseGoogle}
          onFailure={responseGoogle}
          cookiePolicy={'single_host_origin'}
        />
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
