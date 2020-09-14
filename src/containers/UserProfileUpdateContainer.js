import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import * as yup from 'yup';
import { Redirect } from 'react-router-dom';
import RegistrationComponent from '../components/RegistrationComponent';
import { setErrors, resetErrors, registrationRequest } from '../actions/formActions';
import UserProfileUpdateComponent from '../components/UserProfileUpdateComponent';

const UserProfileUpdateContainer = () => {
  const dispatch = useDispatch();
  const userprofileupdatestate = useSelector((state) => state.userprofileupdateReducer);
  const { firstname, lastname, country, state, city, address } = userprofileupdatestate;
  const schema = yup.object().shape({
    firstname: yup.string().required(),
    lastname: yup.string(),
    country: yup.string(),
    state: yup.string(),
    city: yup.string(),
    address: yup.string()
  });

  const validateData = () => {
    dispatch(resetErrors());
    schema.isValid({ firstname, lastname, country, state, city, address }).then(function (valid) {
      if (!valid) {
        schema
          .validate({ firstname, lastname, country, state, city, address }, { abortEarly: false })
          .catch((err) => {
            err.inner.forEach((ele) => {
              dispatch(setErrors(ele));
            });
          });
      } else {
        console.log('userupdate profile');
        dispatch(
          registrationRequest({
            firstname,
            lastname,
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

  if (userprofileupdatestate.registered) {
    return <Redirect to="/login" />;
  }

  return (
    <UserProfileUpdateComponent
      validateData={validateData}
      dispatch={dispatch}
      formState={userprofileupdatestate}
    />
  );
};

export default UserProfileUpdateContainer;
