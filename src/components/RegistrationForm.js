import React from 'react';
import { Form } from 'reactstrap';
import ButtonWrapper from './ButtonWrapper';
import FormEmailField from './FormEmailField';
import FormPasswordField from './FormPasswordField';
import FormTextField from './FormTextField';

const RegistrationForm = () => {
  return (
    <>
      <h3>Register</h3>
      <hr />
      <Form>
        <FormEmailField />
        <FormPasswordField />
        <FormTextField />
        <ButtonWrapper buttonText={'Submit'} />
      </Form>
      <h6>
        <br />
        Already registered? login
      </h6>
    </>
  );
};

export default RegistrationForm;
