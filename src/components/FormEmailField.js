import React from 'react';
import FormField from './FormField';

const email = {
  field: 'exampleEmail',
  labelText: 'Email',
  type: 'email',
  name: 'email',
  placeholder: 'example@company.com'
};
const FormEmailField = () => {
  return <FormField formfield={email} />;
};

export default FormEmailField;
