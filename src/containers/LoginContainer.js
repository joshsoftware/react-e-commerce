import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import LoginComponent from '../components/LoginComponent';
import * as yup from 'yup';
import { Redirect } from 'react-router-dom';
import { setErrors, resetErrors, setIsLoading, loginRequest } from '../actions/formActions';

const LoginContainer = () => {
  const dispatch = useDispatch();
  const result = useSelector((state) => state.loginReducer);
  const { email, password, userDetails } = result;

  let schema = yup.object().shape({
    email: yup.string().email().required(),
    password: yup.string().required()
  });

  const validateData = () => {
    dispatch(resetErrors());
    dispatch(setIsLoading(true));
    schema.isValid({ email, password }).then(function (valid) {
      if (!valid) {
        schema.validate({ email, password }, { abortEarly: false }).catch((err) => {
          err.inner.forEach((ele) => {
            dispatch(setErrors(ele));
          });
        });
      } else {
        dispatch(loginRequest({ email, password }));
      }
    });
    dispatch(setIsLoading(false));
  };
  if (userDetails.token && userDetails.isAdmin) {
    return <Redirect to="/admindashboard" />;
  } else if (userDetails.token) {
    return <Redirect to="/products" />;
  }
  return <LoginComponent validateData={validateData} dispatch={dispatch} formState={result} />;
};

export default LoginContainer;
