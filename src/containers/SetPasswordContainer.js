import React from 'react';
import SetPassword from '../components/SetPassword';
import { useDispatch, useSelector } from 'react-redux';
import * as yup from 'yup';
import PropTypes from 'prop-types';
import { setErrors, resetErrors, setPasswordRequest } from '../actions/formActions';
import { Redirect } from 'react-router-dom';

const SetPasswordContainer = (props) => {
  const dispatch = useDispatch();
  const setPasswordState = useSelector((state) => state.setPasswordReducer);
  const { password, confirmPassword, verified } = setPasswordState;
  const schema = yup.object().shape({
    password: yup
      .string()
      .min(8, 'Password is too short - should be 8 chars minimum.')
      .matches(/^(?=.*[A-Za-z])/, 'must contain one or more uppercase or lowercase characters')
      .matches(/(?=.*\d)/, 'must contain one or more numeric characters')
      .matches(/(?=.*[@$!%*#?&\s])/, 'must contain one or more special characters')
      .matches(/[A-Za-z\d@$!%*#?&\s]{8,}$/, 'must contain atleast 8 characters')
      .required('No password provided'),
    confirmPassword: yup
      .string()
      .required('Confirm password is a required field')
      .test('Confirm Password', "Password Doesn't Match", (value) => {
        if (value !== password) {
          return false;
        }
        return true;
      })
  });
  const validateData = () => {
    dispatch(resetErrors());
    schema.isValid({ password, confirmPassword }).then(function (valid) {
      if (!valid) {
        schema.validate({ password, confirmPassword }, { abortEarly: false }).catch((err) => {
          err.inner.forEach((ele) => {
            dispatch(setErrors(ele));
          });
        });
      } else {
        let token = props.location.search.slice(7, props.location.search.length).trim();
        dispatch(setPasswordRequest({ password, token }));
        //dispatch(resetState());
      }
    });
  };

  if (verified) {
    return <Redirect to="/login" />;
  }
  return (
    <SetPassword validateData={validateData} dispatch={dispatch} formState={setPasswordState} />
  );
};
export default SetPasswordContainer;

SetPasswordContainer.propTypes = {
  location: PropTypes.object
};
