import React from 'react';
import { Form } from 'reactstrap';
import { Link } from 'react-router-dom';
import ButtonWrapper from './ButtonWrapper';
import FormEmailField from './FormEmailField';
import FormPasswordField from './FormPasswordField';
import FormTextField from './FormTextField';
import PropTypes from 'prop-types';
import FormDropdownField from './FormDropdownField';
import FormField from './FormField';
import { setField } from '../actions/formActions';
import './CartItem.css';
import { alertMessage, alertRegistration } from '../actions/alertActions';
import { useDispatch } from 'react-redux';
import alertReducer from '../reducers/alertReducer';

let imageUrl = {
  field: 'exampleImageURL',
  labelText: 'Profile Picture* [.jpg, .png, .jpeg, .webp]',
  type: 'file',
  name: 'file',
  placeholder: '**.**',
  inputClassName: 'file_field border-dark'
};

const RegistrationForm = ({ validateData, dispatch, formState }) => {
  const {
    firstname,
    lastname,
    email,
    password,
    country,
    state,
    city,
    address,
    firstnameError,
    lastnameError,
    emailError,
    passwordError,
    addressError,
    isLoading
  } = formState;
  const alertDispatch = useDispatch(alertReducer);
  const uploadImage = (e) => {
    if (e.target.files.length === 0) {
      dispatch(setField('imageUrl', ''));
      return;
    }
    const files = e.target.files;
    let data1 = new FormData();
    data1.append('file', files[0]);
    dispatch(setField('imageUrl', data1.get('file')));
  };
  imageUrl = {
    ...imageUrl,
    onChange: (evt) => {
      uploadImage(evt);
    },
    invalid: formState.imageUrlError !== null ? true : false,
    message: formState.imageUrlError
  };
  return (
    <>
      <h3>Register</h3>
      <hr />
      <Form
        onSubmit={(e) => {
          e.preventDefault();
          validateData();
        }}>
        <FormEmailField
          email={email}
          emailError={emailError}
          dispatch={dispatch}
          isRequired={true}
        />
        <FormPasswordField
          password={password}
          passwordError={passwordError}
          dispatch={dispatch}
          isRequired={true}
        />
        <FormTextField
          firstname={firstname}
          lastname={lastname}
          address={address}
          firstnameError={firstnameError}
          lastnameError={lastnameError}
          addressError={addressError}
          dispatch={dispatch}
          isRequired={true}
        />
        <FormDropdownField country={country} state={state} city={city} dispatch={dispatch} />
        <br></br>
        <FormField formfield={imageUrl} />
        <br />
        <ButtonWrapper
          buttonText={'Register'}
          onSubmit={(e) => {
            e.preventDefault();
            validateData();
          }}
          disabled={isLoading}
        />
      </Form>
      <br />
      <h6>
        Already registered?
        <span className="input-group-btn">
          <Link
            to="/login"
            onClick={() => {
              alertDispatch(alertRegistration({ alert: false, alertText: '' }));
              alertDispatch(alertMessage({ alert: false, alertText: '' }));
            }}>
            {' '}
            Click to login
          </Link>
        </span>
      </h6>
    </>
  );
};

export default RegistrationForm;

RegistrationForm.propTypes = {
  validateData: PropTypes.func.isRequired,
  dispatch: PropTypes.func.isRequired,
  formState: PropTypes.object.isRequired
};
