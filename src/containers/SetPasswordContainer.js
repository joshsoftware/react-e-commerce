import React from 'react';
import SetPassword from '../components/SetPassword';
import { useDispatch, useSelector } from 'react-redux';
import * as yup from 'yup';
import { setErrors, resetErrors, resetState } from '../actions/formActions';
import setPasswordReducer from '../reducers/setPasswordReducer';

const SetPasswordContainer = () => {
  const dispatch = useDispatch();
  const setPasswordState = useSelector((state) => state.setPasswordReducer);
  const { password, confirmPassword } = setPasswordState;
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
    schema.isValid({ password, confirmPassword }).then(function (valid) {
      if (!valid) {
        schema.validate({ password, confirmPassword }, { abortEarly: false }).catch((err) => {
          err.inner.forEach((ele) => {
            dispatch(setErrors(ele));
          });
        });
      } else {
        //dispatch(loginRequest({ email, password }));
        //dispatch(resetState());
      }
    });
  };

  return (
    <SetPassword validateData={validateData} dispatch={dispatch} formState={setPasswordState} />
  );
};
export default SetPasswordContainer;
