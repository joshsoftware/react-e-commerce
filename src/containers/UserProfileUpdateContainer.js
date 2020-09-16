import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import * as yup from 'yup';
import { Redirect } from 'react-router-dom';
import { setErrors, resetErrors, updateRequest } from '../actions/formActions';
import UserProfileUpdateComponent from '../components/UserProfileUpdateComponent';
import { initialState } from '../reducers/userprofileupdateReducer';
import NavigationBarComponent from '../components/NavigationBarComponent';
import Footer from '../components/Footer';
const UserProfileUpdateContainer = () => {
  const dispatch = useDispatch();

  const { userDetails } = useSelector((state) => state.loginReducer);
  const { token } = userDetails;
  const userprofileupdatestate = useSelector((state) => state.userprofileupdateReducer);
  const { firstname, lastname, password, country, state, city, address } = userprofileupdatestate;
  const schema = yup.object().shape({
    firstname: yup.string(),
    lastname: yup.string(),
    password: yup.string().min(8).required(),
    country: yup.string(),
    state: yup.string(),
    city: yup.string(),
    address: yup.string()
  });

  const validateData = () => {
    dispatch(resetErrors());
    schema
      .isValid({ firstname, lastname, password, country, state, city, address })
      .then(function (valid) {
        if (!valid) {
          schema
            .validate(
              { firstname, lastname, password, country, state, city, address },
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
          dispatch(
            updateRequest({
              firstname,
              lastname,
              form_country,
              form_state,
              form_city,
              password,
              address,
              token
            })
          );
        }
      });
  };

  if (userprofileupdatestate.updated) {
    return <Redirect to="/profile" />;
  }
  if (!userDetails.token) {
    return <Redirect to="/login" />;
  }
  return (
    <>
      <NavigationBarComponent color="dark" expand="md" />
      <UserProfileUpdateComponent
        validateData={validateData}
        dispatch={dispatch}
        formState={userprofileupdatestate}
      />
      <Footer />
    </>
  );
};

export default UserProfileUpdateContainer;
