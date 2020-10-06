import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import * as yup from 'yup';
import { Redirect } from 'react-router-dom';
import { setErrors, resetErrors, updateRequest, resetState } from '../actions/formActions';
import UserProfileUpdateComponent from '../components/UserProfileUpdateComponent';
import { initialState } from '../reducers/userprofileupdateReducer';
import NavigationBarComponent from '../components/NavigationBarComponent';
import Footer from '../components/Footer';

const UserProfileUpdateContainer = () => {
  const dispatch = useDispatch();
  const userDetails = JSON.parse(sessionStorage.getItem('userDetails'));
  const { token } = userDetails;
  const userprofileupdatestate = useSelector((state) => state.userprofileupdateReducer);
  const { firstname, lastname, country, state, city, address, imageUrl } = userprofileupdatestate;

  const schema = yup.object().shape({
    firstname: yup.string(),
    lastname: yup.string(),
    password: yup
      .string()
      .notRequired()
      .matches(/^(?=.*[A-Za-z])/, 'must contain one or more uppercase or lowercase characters')
      .matches(/(?=.*\d)/, 'must contain one or more numeric characters')
      .matches(/(?=.*[@$!%*#?&\s])/, 'must contain one or more special characters')
      .matches(/[A-Za-z\d@$!%*#?&\s]{0,}$/, 'must contain atleast 8 characters')
      .test('size', 'password must be at least 8 characters', (value) => {
        console.log('in test', value);
        if (value === undefined) {
          return true;
        }
        if (value === '' || value.length >= 8) {
          return true;
        } else {
          return false;
        }
      }),
    city: yup.string(),
    address: yup.string(),
    imageUrl: yup.mixed().test('extension', 'allowed files jpg, jpeg, gif, webp, png', (value) => {
      let array = ['image/jpg', 'image/jpeg', 'image/png', 'image/webp'];
      if (typeof value === 'string' && value.includes('assets')) {
        return true;
      }
      if (value !== '') {
        return array.includes(value.type);
      }
      return true;
    })
  });

  const validateData = () => {
    dispatch(resetErrors());
    let password = userprofileupdatestate.password;
    if (password === '') {
      password = undefined;
    }
    schema
      .isValid({ firstname, lastname, password, country, state, city, address, imageUrl })
      .then(function (valid) {
        if (!valid) {
          schema
            .validate(
              { firstname, lastname, password, country, state, city, address, imageUrl },
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
              imageUrl,
              token
            })
          );
        }
      });
  };
  if (userprofileupdatestate.updated) {
    return <Redirect to="/profile" />;
  }
  if (!userDetails) {
    return <Redirect to="/login" />;
  }
  return (
    <>
      <NavigationBarComponent className="navClass fixed-top" expand="md" />
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
