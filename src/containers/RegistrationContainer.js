import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import * as yup from 'yup';
import { Redirect } from 'react-router-dom';
import RegistrationComponent from '../components/RegistrationComponent';
import { setErrors, resetErrors, registrationRequest } from '../actions/formActions';

const RegistrationContainer = () => {
  const dispatch = useDispatch();
  const registrationState = useSelector((state) => state.registrationReducer);
  const { firstname, lastname, email, password, country, state, city, address } = registrationState;
  const schema = yup.object().shape({
    firstname: yup.string().required(),
    lastname: yup.string(),
    email: yup.string().email().required(),
    password: yup.string().min(8).required(),
    country: yup.string(),
    state: yup.string(),
    city: yup.string(),
    address: yup.string()
  });

  const validateData = () => {
    dispatch(resetErrors());
    schema
      .isValid({ firstname, lastname, email, password, country, state, city, address })
      .then(function (valid) {
        if (!valid) {
          schema
            .validate(
              { firstname, lastname, email, password, country, state, city, address },
              { abortEarly: false }
            )
            .catch((err) => {
              err.inner.forEach((ele) => {
                dispatch(setErrors(ele));
              });
            });
        } else {
          console.log('in else');
          dispatch(
            registrationRequest({
              firstname,
              lastname,
              email,
              password,
              country,
              state,
              city,
              address
            })
          );
          console.log('form submitted');
        }
      });
  };

  if (registrationState.registered) {
    return <Redirect to="/login" />;
  }

  return (
    <RegistrationComponent
      validateData={validateData}
      dispatch={dispatch}
      formState={registrationState}
    />
  );
};

export default RegistrationContainer;
