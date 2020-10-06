import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import * as yup from 'yup';
import { Redirect } from 'react-router-dom';
import RegistrationComponent from '../components/RegistrationComponent';
import {
  setErrors,
  resetErrors,
  registrationRequest,
  setIsLoading,
  resetState
} from '../actions/formActions';
import { initialState } from '../reducers/registrationReducer';
import AlertWrapper from '../components/AlertWrapper';
import { alertMessage } from '../actions/alertActions';
import alertReducer from '../reducers/alertReducer';

const RegistrationContainer = () => {
  const { alert, alertText, color } = useSelector((state) => state.alertReducer);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(resetState());
  }, []);
  const alertDispatch = useDispatch(alertReducer);
  const registrationState = useSelector((state) => state.registrationReducer);
  const userDetails = JSON.parse(sessionStorage.getItem('userDetails'));
  const {
    firstname,
    lastname,
    email,
    password,
    country,
    state,
    city,
    address,
    imageUrl
  } = registrationState;
  const schema = yup.object().shape({
    firstname: yup.string().required(),
    lastname: yup.string(),
    email: yup.string().email().required(),
    password: yup.string().min(8).required(),
    country: yup.string(),
    state: yup.string(),
    city: yup.string(),
    address: yup.string(),
    imageUrl: yup
      .mixed()
      .test('required', 'Profile Picture is required', (value) => {
        if (value === '' || value === null) {
          return false;
        }
        return true;
      })
      .test('extension', 'allowed files jpg, jpeg, webp, png', (value) => {
        let array = ['image/jpg', 'image/jpeg', 'image/png', 'image/webp'];
        if (value !== '') {
          return array.includes(value.type);
        }
        return true;
      })
  });

  const validateData = () => {
    dispatch(setIsLoading(true));
    dispatch(resetErrors());
    schema
      .isValid({
        firstname,
        lastname,
        email,
        password,
        country,
        state,
        city,
        address,
        imageUrl
      })
      .then(function (valid) {
        if (!valid) {
          schema
            .validate(
              {
                firstname,
                lastname,
                email,
                password,
                country,
                state,
                city,
                address,
                imageUrl
              },
              { abortEarly: false }
            )
            .catch((err) => {
              err.inner.forEach((ele) => {
                dispatch(setErrors(ele));
              });
            });
        } else {
          let form_country = '',
            form_state = '',
            form_city = '';
          if (
            country !== initialState.country &&
            state !== initialState.state &&
            city !== initialState.city
          ) {
            form_country = country;
            form_state = state;
            form_city = city;
          }
          dispatch(setIsLoading(true));
          dispatch(
            registrationRequest({
              firstname,
              lastname,
              email,
              password,
              form_country,
              form_state,
              form_city,
              address,
              imageUrl
            })
          );
          dispatch(setIsLoading(false));
        }
      });
    dispatch(setIsLoading(false));
  };

  const timeOutFunction = async () => {
    setTimeout(() => {
      alertDispatch(alertMessage({ alert: false, alertText: '' }));
    }, 10000);
  };

  useEffect(() => {
    timeOutFunction();
  }, [alert]);
  if (registrationState.registered) {
    return <Redirect to="/login" />;
  }
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
        color={color}
        isOpen={alert}
        data={alertText}
      />
      <RegistrationComponent
        validateData={validateData}
        dispatch={dispatch}
        formState={registrationState}
      />
    </>
  );
};

export default RegistrationContainer;
