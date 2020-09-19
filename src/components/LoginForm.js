import React from 'react';
import { useDispatch } from 'react-redux';
import { Form } from 'reactstrap';
import ButtonWrapper from './ButtonWrapper';
import FormEmailField from './FormEmailField';
import FormPasswordField from './FormPasswordField';
import PropTypes from 'prop-types';
import { GoogleLogin } from 'react-google-login';
import { loginOAuthRequest } from '../actions/formActions';
import { Link } from 'react-router-dom';
import alertReducer from '../reducers/alertReducer';
import { alertLogin } from '../actions/alertActions';

const LoginForm = ({ validateData, dispatch, formState }) => {
  const { email, password, emailError, passwordError, isLoading } = formState;
  const dispatchOAuth = useDispatch();
  const responseGoogle = (response) => {
    alertDispatch(alertLogin({ alert: true, alertText: 'Successfully Login' }));
    dispatchOAuth(loginOAuthRequest(response.tokenObj.access_token));
  };
  const alertDispatch = useDispatch(alertReducer);
  return (
    <>
      <h3>Login</h3>
      <hr />
      <Form
        onSubmit={(e) => {
          e.preventDefault();
          validateData();
          alertDispatch(alertLogin({ alert: true, alertText: 'Successfully Login' }));
        }}>
        <FormEmailField
          email={email}
          emailError={emailError}
          dispatch={dispatch}
          isRequired={true}
        />
        <FormPasswordField
          password={password}
          passwordError={passwordError}
          dispatch={dispatch}
          isRequired={true}
        />
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
      <br />
      <h6>
        Not registered?
        <span className="input-group-btn">
          <Link to="/register"> Click to register</Link>
        </span>
      </h6>
    </>
  );
};

export default LoginForm;

LoginForm.propTypes = {
  validateData: PropTypes.func.isRequired,
  dispatch: PropTypes.func.isRequired,
  formState: PropTypes.object.isRequired
};
