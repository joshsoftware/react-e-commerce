import React from 'react';
import { useDispatch, useSelector } from "react-redux";
import LoginComponent from '../components/LoginComponent';
import * as yup from 'yup';
import { Redirect } from "react-router-dom";
// import loginReducer, { initialState } from '../reducers/LoginReducer';
import { setErrors, resetErrors, setIsLoading, loginRequest } from '../actions/formActions';

const LoginContainer = () => {
  // const [loginState, dispatch] = useReducer(loginReducer, initialState);
  const dispatch = useDispatch();
  const result = useSelector((state) => state.loginReducer);
  const {
    email,
    password,
    // usernameError,
    // passwordError,
    userDetails,
  } = result;

  let schema = yup.object().shape({
    email: yup.string().email().required(),
    password: yup.string().required()
  });

  // const { email, password } = loginState;
  const validateData = () => {
    dispatch(resetErrors());
    // dispatch(setIsLoading(true));
    schema.isValid({ email, password }).then(function (valid) {
      if (!valid) {
        schema.validate({ email, password }, { abortEarly: false }).catch((err) => {
          err.inner.forEach((ele) => {
            dispatch(setErrors(ele));
          });
        });
      } else {
        dispatch(loginRequest({ email, password }));
        console.log('login done', email, password);
      }
    });
    // dispatch(setIsLoading(false));
  };

  // if (userDetails.auth_token) {
  //   return (<Redirect to='/product' />)
  // }

  return <LoginComponent validateData={validateData} dispatch={dispatch} formState={result} />;
};

export default LoginContainer;
