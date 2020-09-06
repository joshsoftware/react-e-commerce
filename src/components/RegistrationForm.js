import React from 'react';
import { Form } from 'reactstrap';
import FormField from './FormField';
import ButtonWrapper from './ButtonWrapper';
import PropTypes from 'prop-types';
const RegistrationForm = ({
  firstname,
  lastname,
  email,
  password,
  country,
  state,
  city,
  address
}) => {
  return (
    <Form>
      <FormField formfield={firstname} />
      <FormField formfield={lastname} />
      <FormField formfield={email} />
      <FormField formfield={password} />
      <FormField formfield={country} />
      <FormField formfield={state} />
      <FormField formfield={city} />
      <FormField formfield={address} />
      <ButtonWrapper buttonText={'Submit'} />
    </Form>
  );
};

export default RegistrationForm;

RegistrationForm.propTypes = {
  firstname: PropTypes.object.isRequired,
  lastname: PropTypes.object.isRequired,
  email: PropTypes.object.isRequired,
  password: PropTypes.object.isRequired,
  country: PropTypes.object.isRequired,
  state: PropTypes.object.isRequired,
  city: PropTypes.object.isRequired,
  address: PropTypes.object.isRequired
};
