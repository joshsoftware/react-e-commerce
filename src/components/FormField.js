import React from 'react';
import { FormGroup, FormFeedback } from 'reactstrap';
import FormInput from './FormInput';
import { FormLabel } from './FormLabel';

const FormField = ({ obj }) => {
  const { field, labelText, type, name, id, placeholder } = obj;
  return (
    <FormGroup>
      <FormLabel field={field} labelText={labelText} />
      <FormInput type={type} name={name} id={id} placeholder={placeholder} />
      <FormFeedback></FormFeedback>
    </FormGroup>
  );
};

export default FormField;
