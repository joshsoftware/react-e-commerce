import React from 'react';
import { Label } from 'reactstrap';

export const FormLabel = ({ field, labelText }) => {
  return <Label for={field}>{labelText}</Label>;
};
