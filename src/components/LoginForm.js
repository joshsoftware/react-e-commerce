import React from 'react';
import { useDispatch } from 'react-redux';
import { Form } from 'reactstrap';
import ButtonWrapper from './ButtonWrapper';
import FormEmailField from './FormEmailField';
import FormPasswordField from './FormPasswordField';
import PropTypes from 'prop-types';
import { GoogleLogin } from 'react-google-login';
import { loginOAuthRequest } from '../actions/formActions';

const LoginForm = ({ validateData, dispatch, formState }) => {
  const { email, password, emailError, passwordError, isLoading } = formState;
  const dispatchOAuth = useDispatch();

  const responseGoogle = (response) => {
    dispatchOAuth(loginOAuthRequest(response.tokenObj.access_token));
  };

  return (
    <>
      <h3>Login</h3>
      <hr />
      <Form
        onSubmit={(e) => {
          e.preventDefault();
          validateData();
        }}>
        <FormEmailField email={email} emailError={emailError} dispatch={dispatch} isRequired={true}/>
        <FormPasswordField password={password} passwordError={passwordError} dispatch={dispatch} isRequired={true}/>
        <ButtonWrapper
          buttonText={'Login'}
          onSubmit={(e) => {
            e.preventDefault();
            validateData();
          }}
          disabled={isLoading}
        />
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
