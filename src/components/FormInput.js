import React from 'react';
import { Input } from 'reactstrap';

const FormInput = ({ type, name, id, placeholder }) => {
  return <Input type={type} name={name} id={id} placeholder={placeholder} />;
};

export default FormInput;
