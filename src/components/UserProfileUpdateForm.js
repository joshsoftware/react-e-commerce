import React from 'react';
import { Form } from 'reactstrap';
import ButtonWrapper from './ButtonWrapper';
import FormPasswordField from './FormPasswordField';
import FormTextField from './FormTextField';
import PropTypes from 'prop-types';
import FormDropdownField from './FormDropdownField';
import alertReducer from '../reducers/alertReducer';
import { useDispatch } from 'react-redux';
import { alertMessage } from '../actions/alertActions';
import FormField from './FormField';
import { setField } from '../actions/formActions';

let imageUrl = {
  field: 'exampleImageURL',
  labelText: 'Profile Picture* [.jpg, .png, .jpeg, .webp]',
  type: 'file',
  name: 'file',
  placeholder: '**.**'
};
const UserProfileUpdateForm = ({ validateData, dispatch, formState }) => {
  const alertDispatch = useDispatch(alertReducer);
  const {
    firstname,
    lastname,
    country,
    state,
    city,
    address,
    password,
    firstnameError,
    lastnameError,
    passwordError,
    addressError
  } = formState;
  const uploadImage = (e) => {
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
      <h3>Update User Profile</h3>
      <hr />
      <Form
        onSubmit={(e) => {
          e.preventDefault();
          validateData();
          alertDispatch(alertMessage({ alert: true, alertText: 'profile Updated Successfully' }));
        }}
        autoComplete="off">
        <FormPasswordField
          password={password}
          passwordError={passwordError}
          dispatch={dispatch}
          autoComplete="new-password"
        />
        <FormTextField
          firstname={firstname}
          lastname={lastname}
          address={address}
          firstnameError={firstnameError}
          lastnameError={lastnameError}
          addressError={addressError}
          dispatch={dispatch}
        />
        <FormDropdownField country={country} state={state} city={city} dispatch={dispatch} />
        <FormField formfield={imageUrl} />
        <br />
        <ButtonWrapper
          buttonText={'Update'}
          onSubmit={(e) => {
            e.preventDefault();
            validateData();
          }}
        />
      </Form>
      <br />
    </>
  );
};

export default UserProfileUpdateForm;

UserProfileUpdateForm.propTypes = {
  validateData: PropTypes.func.isRequired,
  dispatch: PropTypes.func.isRequired,
  formState: PropTypes.object.isRequired
};
