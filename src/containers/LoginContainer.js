import React, { useReducer } from 'react';
import LoginComponent from '../components/LoginComponent';
import * as yup from 'yup';
import loginReducer, { initialState } from '../reducers/LoginReducer';
import { setErrors, resetErrors, setIsLoading } from '../actions/formActions';
const LoginContainer = () => {
  const [loginState, dispatch] = useReducer(loginReducer, initialState);
  let schema = yup.object().shape({
    email: yup.string().email().required(),
    password: yup.string().required()
  });

  const { email, password } = loginState;
  const validateData = () => {
    dispatch(resetErrors());
    dispatch(setIsLoading(true));
    setTimeout(() => {
      console.log('waiting');
    }, 5000);
    schema.isValid({ email, password }).then(function (valid) {
      if (!valid) {
        schema.validate({ email, password }, { abortEarly: false }).catch((err) => {
          err.inner.forEach((ele) => {
            dispatch(setErrors(ele));
          });
        });
      } else {
        //dispatch(loginRequest({ username, password }));
        console.log('login done');
      }
    });
    dispatch(setIsLoading(false));
  };

  // if (userDetails.auth_token) {
  //   return (<Redirect to='/dashboard' />)
  // }

  return <LoginComponent validateData={validateData} dispatch={dispatch} formState={loginState} />;
};

export default LoginContainer;
