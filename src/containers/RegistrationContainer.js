import React, { useReducer } from 'react';
import registrationReducer, { initialState } from '../reducers/registrationReducer';
import * as yup from 'yup';
import RegistrationComponent from '../components/RegistrationComponent';
import { setErrors, resetErrors, setField } from '../actions/formActions';

const RegistrationContainer = () => {
  const [registrationState, dispatch] = useReducer(registrationReducer, initialState);
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

  const { firstname, lastname, email, password, country, state, city, address } = registrationState;
  const validateData = () => {
    dispatch(resetErrors());
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
          // dispatch(loginRequest({ username, password }));
          console.log(
            'form submitted',
            firstname,
            lastname,
            email,
            password,
            country,
            state,
            city,
            address
          );
        }
      });
  };

  // if (userDetails.auth_token) {
  //   return <Redirect to="/dashboard" />;
  // }

  return (
    <RegistrationComponent
      validateData={validateData}
      dispatch={dispatch}
      formState={registrationState}
    />
  );
};

export default RegistrationContainer;
