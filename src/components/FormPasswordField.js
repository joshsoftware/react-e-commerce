import React from 'react';
import FormField from './FormField';

const password = {
  field: 'examplePassword',
  labelText: 'Password',
  type: 'password',
  name: 'password',
  placeholder: 'password'
};
const FormPasswordField = () => {
  return <FormField formfield={password} />;
};

export default FormPasswordField;
