import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import LoginComponent from '../components/LoginComponent';
import * as yup from 'yup';
import { Redirect } from 'react-router-dom';
import {
  setErrors,
  resetErrors,
  setIsLoading,
  loginRequest,
  setRegistered,
  resetState
} from '../actions/formActions';
import registrationReducer from '../reducers/registrationReducer';
import AlertWrapper from '../components/AlertWrapper';
import alertReducer from '../reducers/alertReducer';
import { alertMessage, alertRegistration } from '../actions/alertActions';

const LoginContainer = () => {
  const [alertState, setAlertState] = useState('');
  const { alert, alertText, registrationAlert, registrationAlertText, color } = useSelector(
    (state) => state.alertReducer
  );
  const dispatch = useDispatch();
  const alertDispatch = useDispatch(alertReducer);
  const registrationDispatch = useDispatch(registrationReducer);
  const { registered } = useSelector((state) => state.registrationReducer);
  const result = useSelector((state) => state.loginReducer);
  const { email, password } = result;
  const userDetails = JSON.parse(sessionStorage.getItem('userDetails'));
  useEffect(() => {
    dispatch(resetState());
  }, []);
  let schema = yup.object().shape({
    email: yup.string().email().required(),
    password: yup.string().required()
  });
  const timeOutFunction = async () => {
    setTimeout(() => {
      alertDispatch(alertMessage({ alert: false, alertText: '' }));
      alertDispatch(alertRegistration({ alert: false, alertText: '' }));
    }, 10000);
  };

  useEffect(() => {
    setAlertState(alertText);
    timeOutFunction();
  }, [alert]);

  useEffect(() => {
    if (registered === true) {
      registrationDispatch(setRegistered(false));
      setAlertState(registrationAlertText);
      timeOutFunction();
    }
  }, [registrationAlert]);

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
        dispatch(resetState());
      }
    });
    dispatch(setIsLoading(false));
  };

  if (userDetails !== null) {
    if (userDetails.token && userDetails.isAdmin) {
      return <Redirect to="/admindashboard" />;
    } else if (userDetails.token) {
      return <Redirect to="/products" />;
    }
  }

  return (
    <>
      <AlertWrapper
        className="text-center fixed-top"
        color={color !== '' ? color : 'info'}
        isOpen={alert || registrationAlert}
        data={alertState}
      />
      <LoginComponent validateData={validateData} dispatch={dispatch} formState={result} />;
    </>
  );
};

export default LoginContainer;
