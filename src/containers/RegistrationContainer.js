import React from 'react';
import { useDispatch, useSelector } from "react-redux";
import registrationReducer, { initialState } from '../reducers/registrationReducer';
import * as yup from 'yup';
import { Redirect } from "react-router-dom";
import RegistrationComponent from '../components/RegistrationComponent';
import { setErrors, resetErrors, setField, setIsLoading, registrationRequest } from '../actions/formActions';

const RegistrationContainer = () => {
  // const [registrationState, dispatch] = useReducer(registrationReducer, initialState);
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

  // const { firstname, lastname, email, password, country, state, city, address } = registrationState;
  const validateData = () => {
    dispatch(resetErrors());
    // dispatch(setIsLoading(true));
    // setTimeout(() => {
    //   console.log('waiting');
    // }, 5000);
    if (
      country === initialState.country ||
      state === initialState.state ||
      city === initialState.city
    ) {
      dispatch(setField('country', ''));
      dispatch(setField('state', ''));
      dispatch(setField('city', ''));
    }
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
          console.log("in else")
          dispatch(registrationRequest({ firstname, lastname, email, password, country, state, city, address }));
          // dispatch(setIsLoading(true));
          console.log('form submitted');
        }
      });

    // dispatch(setIsLoading(false));
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
